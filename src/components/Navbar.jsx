import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaGithub, FaTrophy, FaSpotify } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark vh-100 d-flex flex-column align-items-center p-3">
      <ul className="nav flex-column">
        <li className="nav-item mb-3">
          <Link className="nav-link text-white" to="/">
            <FaHome size={24} />
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link className="nav-link text-white" to="/about">
            <FaUser size={24} />
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link className="nav-link text-white" to="/github">
            <FaGithub size={24} />
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link className="nav-link text-white" to="/achievements">
            <FaTrophy size={24} />
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link className="nav-link text-white" to="/spotify">
            <FaSpotify size={24} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
