import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BasicInformation from "../../../components/create/BasicInformation";
import WriteHere from "../../../components/create/WriteHere";
import PreviewPage from "../../../components/create/PreviewPage";
import "./BlogEditPage.css";
import { BlogResponse } from "../BlogsPge";

interface GenerateResponse {
  content: string;
}

const Create = () => {
  const { id } = useParams();
  const initialState = {
    name: "",
    email: "",
    title: "",
    imgUrl: "",
    genre: "",
  };

  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState<string>("");
  const [value, setValue] = useState(initialState);
  const [requestSend, setRequestSend] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isGenerating, setIsGenerating] = useState(false); // State for article generation
  const navigate = useNavigate();

  console.log(requestSend, isSubmitted);

  const publishPost = async () => {
    setIsLoading(true);
    try {
      const payload = {
        title: value.title,
        authorName: value.name,
        authorEmail: value.email,
        content: article,
        genre: value.genre,
        imageUrl: value.imgUrl,
        ert: article.length * 10 + " mins",
      };

      if (id) {
        const response = await axios.put(`http://localhost:5000/api/posts/${id}`, payload);
        setRequestSend("Article updated successfully");
        console.log(response);
      } else {
        const response = await axios.post("http://localhost:5000/api/posts", payload);
        setRequestSend("Article submitted successfully");
        console.log(response);
      }

      setIsLoading(false);
      setValue(initialState);
      setIsSubmitted(true);
      navigate("/manage");
    } catch (error) {
      console.error("Error submitting/updating post", error);
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    const newErrors = {};

    if (step === 1) {
      if (!value.name) console.log("Name cannot be empty");
      if (!value.email) {
        console.log("Email cannot be empty");
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.email)) {
          console.log("Enter a valid email");
        }
      }
      if (!value.title) console.log("Title cannot be empty");
    }

    if (step === 2 && article === "") {
      console.log("Please write your article before proceeding");
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  // Handle article generation
  const generateArticle = async () => {
    if (!value.title) {
      console.log("Title is required to generate an article");
      return;
    }

    setIsGenerating(true);
    try {
      const response = await axios.post("http://localhost:5000/api/ai/generate", {
        title: value.title,
      });
      const data = response.data as GenerateResponse;
      setArticle(data.content);
    } catch (error) {
      console.error("Error generating article", error);
    } finally {
      setIsGenerating(false);
    }
  };

  // Handle discard
  const handleDiscard = () => {
    navigate("/manage");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
          const data = response.data as BlogResponse;
          value.title = data.title;
          value.genre = data.genre;
          value.imgUrl = data.imageUrl;
          value.name = data.authorName;
          value.email = data.authorEmail;
          setArticle(data.content);
        }
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="progress-bar">
          <div className={`step ${step >= 1 ? "active" : ""}`}>1. Basic Info</div>
          <div className={`step ${step >= 2 ? "active" : ""}`}>2. Write Here</div>
          <div className={`step ${step >= 3 ? "active" : ""}`}>3. Preview & Publish</div>
          <div className="progress" style={{ width: `${((step - 1) / 3) * 100}%` }}></div>
        </div>

        {step === 1 && <BasicInformation value={value} setValue={setValue} errors={errors} />}
        {step === 2 && (
          <div className="middle_step_2">
            <WriteHere article={article} setArticle={setArticle} errors={errors} />
            <button
              onClick={generateArticle}
              className="generate-button"
              disabled={isGenerating}
            >
              {isGenerating ? "Generating..." : "Generate Article"}
            </button>
          </div>
        )}
        {step === 3 && <PreviewPage value={value} article={article} />}

        <div className="navigation">
          {step > 1 && (
            <div onClick={handleBack} className="nav-button">
              Previous
            </div>
          )}

          {step < 3 ? (
            <button onClick={handleNext} className="nav-button next">
              Next
            </button>
          ) : (
            <button
              onClick={publishPost}
              disabled={isLoading}
              className="nav-button publish"
            >
              {isLoading ? (
                <div className="loading">Publishing...</div>
              ) : (
                <>Publish Article</>
              )}
            </button>
          )}
        </div>

        <button onClick={handleDiscard} className="discard-button">
          &#10006;
        </button>
      </div>
    </>
  );
};

export default Create;

