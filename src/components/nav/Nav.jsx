import React, { useEffect, useState } from "react";

export default function Nav({ slideLeftToRight }) {
  const [showNavMobile, setShowNavMobile] = useState(false);

  const handleShowNavMobile = () => {
    setShowNavMobile(!showNavMobile);
  };

  useEffect(() => {
    slideLeftToRight(".content-nav-mobile", "0", ".1");
  }, [showNavMobile]);

  return (
    <nav>
      <div className="navbar-brand mobile">
        <button
          onClick={() => handleShowNavMobile()}
          id="hamburger"
          className={showNavMobile ? "navMobileActive" : null}
        >
          <span id="line1" className="line"></span>
          <span id="line2" className="line"></span>
          <span id="line3" className="line"></span>
        </button>
        <ul
          className={
            showNavMobile
              ? "content-nav-mobile nav-mobile"
              : "nav-mobile"
          }
        >
          <li>
            <a href="#introduction">HOME</a>{" "}
          </li>
          <li>
            <a href="#about">ABOUT ME</a>{" "}
          </li>
          <li>
            <a href="#myProjects">MY PROJECTS</a>{" "}
          </li>
        </ul>
      </div>
      <ul className="nav-large-screen ">
        <li>
          <a href="#introduction">HOME</a>{" "}
        </li>
        <li>
          <a href="#about">ABOUT ME</a>{" "}
        </li>
        <li>
          <a href="#myProjects">MY PROJECTS</a>{" "}
        </li>
      </ul>
    </nav>
  );
}
