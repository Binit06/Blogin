import React, { useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "./css/PreviewPage.css";

interface PreviewPageProps {
  value: {
    name: string;
    title: string;
  };
  article: string;
  bannerImage?: string;
}

const PreviewPage: React.FC<PreviewPageProps> = ({ value, article }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScrollLock = (e: WheelEvent) => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer && scrollContainer.contains(e.target as Node)) {
        e.stopPropagation();
      }
    };

    document.addEventListener("wheel", handleScrollLock, { passive: true });
    return () => {
      document.removeEventListener("wheel", handleScrollLock);
    };
  }, []);

  return (
    <div className="preview-page">
      <h1 className="preview-page__title">Preview Your Article</h1>
      <div className="preview-page__container">
        <div className="laptop-mockup">
          <div
            className="laptop-screen"
            ref={scrollContainerRef}
          >
            <h1 className="article-title">{value.title}</h1>
            <div className="article-content">
              <ReactQuill
                value={article}
                theme="bubble"
                readOnly
                className="quill-editor"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;

