import { IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import "./Presentation.css";


function Presentation(props) {
 
  return (
    <div className="all">
    <div className="demodiv">
      <div className="demo">My name is Nha Vy, everybody CALL ME ...0695821092.</div> 
      </div>
      <div className='bodylist'>
      <div className="content">
        <div className='content_container'>
          <p className='content_container_text'>Skills</p>
          <ul className='content_container_list'>
            <li className="list_item">HTML</li>
            <li className="list_item">CSS</li>
            <li className="list_item">JS</li>
            <li className="list_item">React JS</li>
            <li className="list_item">Node JS</li>
            <li className="list_item">MySQL</li>
            <li className="list_item">Agile</li>
            <li className="list_item">Terminal</li>
            <li className="list_item">Git github</li>
            <li className="list_item">& SO MUCH MORE</li>
          </ul>
        </div>
      </div>
      </div>
      {/* <img src="./me.png" alt="about-me" className="me" /> */}
      <IconButton href="https://github.com/navyrandom">
        <img
          src="./github.png"
          alt="linkgithub"
          className="github"
        />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/nha-vy-vo-doan-94817765/">
        <img
          src="./linkedin.png"
          alt="link-linkedin"
          className="linkedin"
        />
      </IconButton>
    </div>
  );
}

export default Presentation;
