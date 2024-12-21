import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { LuPen } from "react-icons/lu";
import "./Navbar.css";

const Navbar: React.FC = () => {
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

        {/* Right Section - Buttons */}
        <div className="navbar-right">
          <div className="navbar-write">
            <LuPen size={15} />
            <button className="btn btn-solid">Write</button>
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;

