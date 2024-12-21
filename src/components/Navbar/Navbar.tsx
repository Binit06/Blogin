import React from "react";
import { NavLink, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { LuPen } from "react-icons/lu";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const id = useParams();
  const location = useLocation();
  const isBlogViewPage = location.pathname.startsWith('/blog/')
  const navigate = useNavigate();

  const handleBlogCreateClick = () => {
    navigate('/manage/blog/new');
  }

  const handleBlogUpdateClick = () => {
    navigate(`/manage/blog/update/${id}`)
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">
            <span className="logo-text">Blogin</span>
          </div>

          <div className="vertical-line"></div>

          <div className="nav-links">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/manage"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Manage
            </NavLink>
            <NavLink
              to="/github"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              GitHub
            </NavLink>
          </div>
        </div>

        <div className="navbar-right">
          {isBlogViewPage && id ? (
            <div className="navbar-write" onClick={handleBlogUpdateClick}>
              <LuPen size={15} />
              <button className="btn btn-solid">Update</button>
            </div>
          ) : (
            <div className="navbar-write" onClick={handleBlogCreateClick}>
              <LuPen size={15} />
              <button className="btn btn-solid">Write</button>
            </div>
          )}
        </div>
      </nav>
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;

