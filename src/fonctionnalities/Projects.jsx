import React, { useState, useEffect } from "react";
import axios from "axios";
import PostItem from "./PostItem";
import "./All.css";

export default function Projects(props) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3031/api`)
      .then((response) => response.data)
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="listCards">
      <div className="cards">
        {projects.map((project) => {
          return (
            <PostItem
              key={project.id}
              title={<h1>{project.title}</h1>}
              description={project.description}
              src={project.image}
            />
          );
        })}
      </div>
    </div>
  );
}
