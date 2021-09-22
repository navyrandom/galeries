import { IconButton } from "@material-ui/core";
import React from "react";
import "./Presentation.css";

function Presentation(props) {
  return (
    <div className="all">
      <div className="demodiv">
        <div className="demo">
          Hi! I am Nha Vy, contact me if you are interested.
        </div>
      </div>
      <div className="wordCarousel">
            <span className="skills">Skills </span>
            <div>
            <ul className="flip4">
              <li>HTML JS React </li>
              <li>CSS Material Tailwind</li>
              <li>Node MySQL MongoDB</li>
              <li>& SO MUCH MORE</li>
            </ul>
            </div>

      </div>
     
      <IconButton href="https://github.com/navyrandom">
        <img src="./github.png" alt="github" className="github" />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/nha-vy-vo-doan-94817765/">
        <img src="./in.png" alt="linkedin" className="linkedin" />
      </IconButton>
    </div>
  );
}

export default Presentation;
