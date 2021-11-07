import { Divider, IconButton } from "@material-ui/core";
import React from "react";
import "./Presentation.css";

function Presentation(props) {
  return (
    <div className="all">
      <div className="demodiv">
        <div className="demo">
          Welcome to the Studio of Arts and Calligraphy ❥
        </div>
      </div>
      <div className="wordCarousel">
            <span className="skills">Admire </span>
            <div>
            <ul className="flip4">
              <li>Hand Made Things</li>
              <li>Paintings</li>
              <li>Calligraphies</li>
              <li>& SO MUCH MORE</li>
            </ul>
            </div>

      </div>
     Web developer
      <IconButton href="https://github.com/navyrandom">
        <img src="./github.png" alt="github" className="github" />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/nha-vy-vo-doan-94817765/">
        <img src="./in.png" alt="linkedin" className="linkedin" />
      </IconButton>
      <Divider/>
    Artists & idea
    </div>
  );
}

export default Presentation;
