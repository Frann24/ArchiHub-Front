import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Menu({ path }) {
  const handleClick = (id) => {
    const anchor = document.querySelector(id);
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <div
      className="mx-4 h-96
    md:mx-8
    lg:mx-16
    xl:mx-32
    "
    >
      <div className="flex flex-col justify-between h-full">
        <div className="menu-div">
          <div className="menu">
            {path === "/home" ? (
              <></>
            ) : (
              <div className="menu-div-link">
                <Link className="menu-link" to="/home">
                  Home
                </Link>
              </div>
            )}
            <div className="menu-div-link">
              <Link
                to="/home"
                onClick={() => handleClick("#posts_id")}
                className="menu-link"
              >
                Posts
              </Link>
            </div>
            <div className="menu-div-link">
              <Link
                to="/home"
                onClick={() => handleClick("#news_id")}
                className="menu-link"
              >
                News
              </Link>
            </div>
          </div>
          <div className="menu">
            <div className="menu-div-link">
              <Link to="/createpost" className="menu-link">
                Create post
              </Link>
            </div>
            <div className="menu-div-link">
              <Link to="/about-us" className="menu-link">
                About us
              </Link>
            </div>
          </div>
        </div>
        <div className="div-icon">
          <a
            href="https://github.com/Frann24/ArchiHub-Front"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <FontAwesomeIcon className="icon" icon={faGithub} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <FontAwesomeIcon className="icon" icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
