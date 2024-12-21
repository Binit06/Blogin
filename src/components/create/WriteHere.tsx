import React from "react";
import "./css/WriteHere.css"
import TextEditor from "../Editor/TextEditor";

interface WriteHereProps {
  article: string;
  setArticle: (article: string) => void;
  errors: {
    article?: string;
  };
}

const WriteHere: React.FC<WriteHereProps> = ({ article, setArticle, errors }) => {
  return (
    <div className="write-here-container">
      <h1 className="write-here-title"></h1>
      <div className="write-here-editor-container">
        <TextEditor article={article} setArticle={setArticle} />
        {errors.article && (
          <p className="error-text">{errors.article}</p>
        )}
      </div>
    </div>
  );
};

export default WriteHere;

