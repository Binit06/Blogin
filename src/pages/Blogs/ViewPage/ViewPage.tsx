import React from 'react';
import './ViewPage.css';

const ViewPage: React.FC = () => {
  return (
    <div className="main-container">
      <div className="blog-title">
        {"How to run a successful business"}
      </div>
      <div
        className="blog-article"
        dangerouslySetInnerHTML={{ __html: "<b>This is the main article</b>" }}
      />
    </div>
  );
}

export default ViewPage;

