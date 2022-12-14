import React, { useEffect, useState } from "react";

export default function Nav({ slideRightToLeft }) {
  const [showNavMobile, setShowNavMobile] = useState(false);

  const handleShowNavMobile = () => {
    setShowNavMobile(!showNavMobile);
  };

  useEffect(() => {
    slideRightToLeft(".content-nav-mobile", "0", ".1");
  }, [showNavMobile]);

  return (
    <nav>
      <svg className="logo">
        {" "}
        <g
          
        >
          <path fill="#8c82fc" d="M30.518 17.185 l4.6952 0 l0 22.5 l-27.179 -14.196 l0 14.511 l-4.6954 0 l0 -22.5 l27.18 14.196 l0 -14.511 z M46.5476 40.04922 l-4.6491 0 l0 -22.591 l4.6491 0 l0 22.591 z M69.59100000000001 15.421 l18.353 24.38 l-5.9015 0 l-5.132 -6.7948 l-14.639 0 l-5.0572 6.7948 l-5.8354 0 z M65.792 28.311 l7.5966 0 l-3.7984 -5.0644 z M108.716 28.125999999999998 l15.938 -10.625 l0 22.5 l-4.6954 0 l0 -13.726 l-11.242 7.4944 l-11.242 -7.4944 l0 13.726 l-4.6954 0 l0 -22.5 z M161.209 19.299 c1.8355 1.8198 1.8204 4.452 1.7971 8.4364 c-0.0018359 0.29664 -0.0033984 0.604 -0.0046876 0.92236 c-0.0089064 2.3647 -0.015195 4.0732 -0.26344 5.514 c-0.21137 1.2284 -0.69948 2.9991 -2.4872 4.1908 c-2.2642 1.5093 -5.6464 1.5434 -13.056 1.6174 c-1.1572 0.011524 -2.2245 0.020156 -3.2091 0.020156 c-5.8708 0 -8.822 -0.31074 -10.708 -2.1844 c-1.964 -1.9514 -1.953 -4.8252 -1.9368 -9.1752 c0.018047 -4.8536 0.029024 -7.7832 2.4894 -9.602 c2.1227 -1.569 5.2056 -1.6103 11.96 -1.7011 l1.3479 -0.018555 c8.4176 -0.12031 11.902 -0.17027 14.071 1.9805 z M158.343 27.708 c0.013086 -2.2896 0.026914 -4.6576 -0.41728 -5.0976 c-0.55112 -0.54644 -3.0246 -0.67276 -6.3168 -0.67276 c-1.3547 0 -2.8484 0.021445 -4.4036 0.043672 l-1.3521 0.018555 c-4.8388 0.064884 -8.3348 0.11195 -9.25 0.78812 c-0.5776 0.42692 -0.587 2.9488 -0.59796 5.8692 c-0.010195 2.7118 -0.019883 5.2732 0.56032 5.8496 c0.9108 0.90508 5.8276 0.85564 10.583 0.80856 c5.4604 -0.054412 9.4056 -0.093908 10.516 -0.8342 c0.65372 -0.4358 0.66208 -2.7032 0.67384 -5.8416 c0.0010547 -0.32148 0.0028906 -0.632 0.0047264 -0.93176 z M198.35500000000002 35.114 l2.324 -0.034844 l0.069572 4.6484 l-2.3241 0.034805 c-0.36176 0.005508 -0.77084 0.011797 -1.2174 0.011797 c-3.2279 0 -8.4052 -0.32016 -11.676 -3.5423 c-1.456 -1.4345 -2.3731 -3.258 -2.7396 -5.44 l-8.4109 0 l-0.033203 8.9792 l-4.6492 -0.017266 l0.074804 -20.255 l0 -2.327 l0.0086328 0 l0 -0.0086328 l2.3223 0.0086328 l21.902 0 c2.9457 0 7.3276 1.8136 7.3276 6.8096 c0 4.9964 -4.0724 6.81 -6.8096 6.81 l-6.9651 0 c0.25086 0.8504 0.65684 1.5585 1.2347 2.1279 c2.337 2.3019 7.216 2.2292 9.5608 2.1939 z M174.42280000000002 26.143 l20.081 -0.000039062 c0.20297 -0.0070704 0.80852 -0.083436 1.3076 -0.35942 c0.43216 -0.2391 0.87372 -0.64012 0.87372 -1.8015 c0 -0.93384 -0.31598 -1.4394 -1.1276 -1.8033 c-0.73764 -0.33062 -1.543 -0.3573 -1.5506 -0.3573 l-19.584 0 l0 4.3216 z"></path>
        </g>
      </svg>
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
            showNavMobile ? "content-nav-mobile nav-mobile" : "nav-mobile"
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
