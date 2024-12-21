import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/HomePage";
import Blogs from "./pages/Blogs/BlogsPge";
import ViewPage from "./pages/Blogs/ViewPage/ViewPage";
import Create from "./pages/Blogs/CreatePage/BlogEditPage";
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="manage" element={<Blogs />} />
          <Route path="manage/blog/new" element={<Create />} />
          <Route path="manage/blog/update/:id" element={<Create />} />
          <Route path="/blog/:id" element={<ViewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

