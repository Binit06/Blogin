import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import BasicInformation from "../../../components/create/BasicInformation";
import WriteHere from "../../../components/create/WriteHere";
import PreviewPage from "../../../components/create/PreviewPage";
import "./BlogEditPage.css";

const Create = () => {
  const initialState = {
    name: "",
    email: "",
    title: "",
  };

  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState("");
  const [value, setValue] = useState(initialState);
  const [requestSend, setRequestSend] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize navigate
  console.log(requestSend, isSubmitted)
  const publishPost = async () => {
    setIsLoading(true);
    console.log(article);
    try {
      const response = await axios.post("https://localhost:3000" + "/blogs", {
        title: value.title,
        authorName: value.name,
        authorEmailId: value.email,
        article: article,
      });
      setIsLoading(false);
      console.log("Article submitted successfully", response);
      setRequestSend("Article submitted successfully");
      setValue(initialState);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting post", error);
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    const newErrors = {};

    if (step === 1) {
      if (!value.name) console.log("Name can not be empty");
      if (!value.email) {
        console.log("Email can not be empty");
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.email)) {
          console.log("Enter a valid email");
        }
      }
      if (!value.title) console.log("Title cannot be empty");
      console.log("Write a tag and press enter to add it");
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

  // Calculate progress
  const progressPercentage = ((step - 1) / 3) * 100;

  // Handle discard
  const handleDiscard = () => {
    navigate("/manage"); // Navigate to /manage page
  };

  return (
    <>
      <div className="container">
        <div className="progress-bar">
          <div className={`step ${step >= 1 ? "active" : ""}`}>1. Basic Info</div>
          <div className={`step ${step >= 2 ? "active" : ""}`}>2. Write Here</div>
          <div className={`step ${step >= 3 ? "active" : ""}`}>3. Preview & Publish</div>
          <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
        </div>

        {step === 1 && <BasicInformation value={value} setValue={setValue} errors={errors} />}
        {step === 2 && <WriteHere article={article} setArticle={setArticle} errors={errors} />}
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

        {/* Discard Button in the corner */}
        <button onClick={handleDiscard} className="discard-button">
          &#10006; {/* Close icon */}
        </button>
      </div>
    </>
  );
};

export default Create;

