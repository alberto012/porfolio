import React from "react";
import "./Proy.css";
import rightArrow from "../../assets/rightArrow.png";
import { proyectsData } from "../data/proyectsdata";
export const Proy = () => {
  return (
    <div className="proyects" id="proy">
      <div className="header">
        <span className= "stroke-text">MY PROYECTS</span>
      </div>
      <div className="proyect-view">
        {proyectsData.map((pr) => (
          <div className="category">
            <span>{pr.heading}</span>
            <span>{pr.details}</span>
            <div className="explore">
              <span>Eplore on GitHub</span>
              <a href={pr.route}> <img className="arrow"src={rightArrow} alt=""/></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
