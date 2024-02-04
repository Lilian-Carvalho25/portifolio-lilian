// import React from 'react';
import "./ProjectBox.css";

const ProjectBox = ({
  // eslint-disable-next-line react/prop-types
  ImgProject, NameProject, DescriptionProject, SkillsProject1, SkillsProject2, SkillsProject3, SkillsProject4, SkillsProject5, SiteProject, GithubProject, GithubProject2, FigmaProject
}) => {
  return (
    <article className="box-projects">
      <img src={ImgProject} alt={NameProject} className="image-project" />
      <div className="container-content">
        <h3>{NameProject}</h3>
        <p>{DescriptionProject}</p>
        <div className="container-tags">
          {SkillsProject1 && (
          <p className="hang-tags">{SkillsProject1}</p>
          )}
          {SkillsProject2 && (
          <p className="hang-tags">{SkillsProject2}</p>
          )}
          {SkillsProject3 && (
          <p className="hang-tags">{SkillsProject3}</p>
          )}
          {SkillsProject4 && (
          <p className="hang-tags">{SkillsProject4}</p>
          )}
          {SkillsProject5 && (
          <p className="hang-tags">{SkillsProject5}</p>
          )}
        </div>
        <div className="button-and-icons-container">
          <a href={SiteProject} target="_blank" rel="noreferrer">
            <button className="bnt-project">Ver projeto</button>
          </a>
          {GithubProject && (
          <a href={GithubProject} target="_blank" rel="noreferrer">
            <img src="icon-github.svg" alt="" className="icon-project" />
          </a>
          )}
          {GithubProject2 && (
            <a href={GithubProject2} target="_blank" rel="noreferrer">
              <img src="icon-github.svg" alt="" className="icon-project" />
            </a>
          )}
          {FigmaProject && (
          <a href={FigmaProject} target="_blank" rel="noreferrer">
            <img src="icon-figma.svg" alt="" className="icon-project" />
          </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectBox;
