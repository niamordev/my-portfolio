import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import DataProjects from "../../data/DataProjects.json";

export default function MyProjects({ opacity }) {
  const [dataProjects, setDataProjects] = useState([]);


  useEffect(() => {
    setDataProjects(DataProjects);
  });
  return (
    <section id="myProjects">
      <h1 className="title">My project</h1>
      <div className="content">
            <span className="intro">
              <h2>Some of my training projects </h2>
              <p>
                (Thanks to{" "}
                <a href="https://www.frontendmentor.io/" target="_blank">
                  Frontend Mentor{" "}
                </a>
                website)
              </p>
            </span>

            <div className="all-projects">
              {dataProjects.map((project) => {
                return (
                  <div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="container-project">
                        {project.importantProject ? (
                          <span className="important-project">BEST</span>
                        ) : null}
                        <img src={project.img} alt="" />
                        <div className="description">
                          <div className="tags">
                            {project.tags.map((tag) => (
                              <p>{tag}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </a>

                    {project.codeSource !== null ? (
                      <a href={project.codeSource} target="_blank">
                        Source code
                      </a>
                    ) : null}
                  </div>
                );
              })}
            </div>
        </div>
    </section>
  );
}
