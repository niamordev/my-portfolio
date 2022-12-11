import React from "react";
import { useEffect } from "react";

export default function Home ({handleTest}) {


  return (
    <section id="introduction">
      {/* <video className="" autoPlay loop muted id="videoIntro">
        <source src="../../../assets/videos/hero.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video> */}

      {/* <img
        id="bgMobile"
        src="../../portfolio/assets/images/bg-small-screen-home2.png"
        alt=""
        className="small-screen hero"
      /> */}

      <img src="../../../logo.png" alt="" className="logo" />

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
