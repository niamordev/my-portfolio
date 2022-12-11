import React from "react";
import { useEffect } from "react";

export default function Home ({handleTest}) {


  return (
    <section id="introduction">

      <img src="../../../my-portfolio/logo.png" alt="" className="logo" />

      <div className="txt-home">
        <h1>Hello, I'm <span className="blue-text">Niamor.</span> </h1>
        <p>A french Front-end developper web .</p>
        <button className="view-more">
          View more
        </button>
      </div>
    </section>
  );
}
