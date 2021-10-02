import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core";
import PostItem from "./PostItem";
import ImagesSlider from "./ImagesSlider";

const useStyle = makeStyles({
  cards: {
    marginTop: "60px",
  },
  images: {
    height: "500px",
  },
});
export default function Projects(props) {
  const classes = useStyle();

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3031/portfolio/`)
      .then((response) => response.data)
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className={classes.cards}>
      {projects.map((project) => {
        return (
          <>
            <ImagesSlider src={project.image} />
            <PostItem
              key={project.id}
              title={<h1>{project.title}</h1>}
              description={project.description}
            />
         
         
          </>
        );
      })}
    </div>
  );
}
