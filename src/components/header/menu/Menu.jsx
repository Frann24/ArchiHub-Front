import React from "react";
import { Link } from "react-router-dom";
import Search from "./search/Search";

function Menu() {
  return (
    <div className="mx-64 bg-gray-100 bg-opacity-50 static">
      <div className="flex justify-evenly">
        <Link to="/posts" className="navbar-item">Posts</Link>
        <Link to="/notices" className="navbar-item">Notices</Link>
        <Link to="/pricing" className="navbar-item">Pricing</Link>
        <Link to="/about-us" className="navbar-item">About us</Link>
        <Link to="/my-perfil" className="navbar-item">My profile</Link>
      </div>
      <Search />
    </div>
  );
}

export default Menu;
