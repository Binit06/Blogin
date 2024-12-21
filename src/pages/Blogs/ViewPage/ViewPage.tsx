import React, { useEffect, useState } from 'react';
import './ViewPage.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BlogResponse } from '../BlogsPge';
import { BACKEND_URL } from '../../../utils/constants';

interface GeneratedResponse {
  summary: string;
}
const ViewPage: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<BlogResponse | null>(null);
  const [summary, setSummary] = useState<string | null>(null);
  const [isSummarizing, setIsSummarizing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BACKEND_URL + "api/posts/" + id);
        setData(response.data as BlogResponse);
      } catch (error) {
        console.log("Response error: ", error);
      }
    };
    fetchData();
  }, [id]);

  const summarizeArticle = async () => {
    if (!data) return;

    setIsSummarizing(true);
    setSummary(null);
    try {
      const response = await axios.post(BACKEND_URL + "api/ai/summarise", {
        article: data.content,
      });
      const data_new = response.data as GeneratedResponse;
      setSummary(data_new.summary);
    } catch (error) {
      console.log("Summarization error: ", error);
      setSummary("Failed to generate summary.");
    } finally {
      setIsSummarizing(false);
    }
  };

  return (
    data ? (
      <div className="main-container">
        <div className="blog-title">
          {data.title}
        </div>
        <div
          className="blog-article"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        <div className="summary-container">
          <button className="summarize-button" onClick={summarizeArticle}>
            Summarize Article
          </button>
          {isSummarizing && <div className="loading-text">Summarizing...</div>}
          {summary && <div className="summary-text">{summary}</div>}
        </div>
      </div>
    ) : null
  );
};

export default ViewPage;

