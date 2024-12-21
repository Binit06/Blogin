import React, { useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import styles from './TextEditor.module.css';

interface TextEditorProps {
  article: string;
  setArticle: (content: string) => void;
}

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ align: [] }], // remove formatting button
  ],
};

const TextEditor: React.FC<TextEditorProps> = ({ article, setArticle }) => {
  const quillRef = useRef<ReactQuill | null>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const quill = quillRef.current?.getEditor();
      if (!quill) return;

      const { scrollTop, scrollHeight, clientHeight } = quill.root;
      const isAtTop = scrollTop === 0 && e.deltaY < 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight && e.deltaY > 0;

      if (!isAtTop && !isAtBottom) {
        quill.root.scrollTop = scrollTop + e.deltaY;
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const quillRoot = quillRef.current?.getEditor().root;
    quillRoot?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      quillRoot?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className={styles.editorContainer}>
      <div className={styles.editorWrapper}>
        <ReactQuill
          ref={quillRef}
          modules={modules}
          className={styles.editor}
          theme="snow"
          value={article}
          onChange={(content) => setArticle(content)}
        />
      </div>
    </div>
  );
};

export default TextEditor;

