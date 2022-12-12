import React from "react";
import { useEffect } from "react";

export default function Home({ handleTest }) {
  return (
    <section id="introduction">
      <img src="../../../my-portfolio/logo.png" alt="" className="logo" />

      <div className="txt-home">
        <h1>
          Hello, I'm <span className="blue-text">Niamor.</span>{" "}
        </h1>
        <p>A french Front-end developper web .</p>
        <a href="#about" className="view-more">
          View more
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path
              fill="#b6beca"
              d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
