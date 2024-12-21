import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/HomePage";
import Blogs from "./pages/Blogs/BlogsPge";
import Profile from "./pages/Profile/PrfilePage";
import Create from "./pages/Blogs/CreatePage/BlogEditPage";
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="manage" element={<Blogs />} />
          <Route path="manage/blog/edit" element={<Create />} />
          <Route path="profile/:id" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

