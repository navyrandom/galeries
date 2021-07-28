import React, { useState,useEffect } from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";
import { makeStyles } from "@material-ui/core";


const useStyle = makeStyles({
  cards: {
    marginTop: "60px",
  },
  images:{
    height: '500px'
  }
});
export default function Projects({ props }) {
  const classes = useStyle();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3031/portfolio/`)
      .then((response) => response.data)
      .then((data) => setProjects(data));
  }, []);

  const [liked, setLiked] = useState(false);
  const [like, setLike] = useState({
    id: "",
    like: ""
  })
  const handleClickLikes = (likeId) => {
    setLiked(!liked);
     axios.patch(`http://localhost:3031/portfolio/${likeId}`, like)
     .then((res) => {
      console.log(res.data)
      const newLike = like.map((project) => {
        if(project.id = likeId){
          return{...project, like: like+1}
        }
        return project
      })
      setLike(newLike);
     })
  };
  return (
    <div className={classes.cards}>
      {projects.map((project) => {
        return (
          <Card className="gallery" key={project.id}>
            <CardImage
              className={classes.images}
              src={project.image}
              alt="Card Image"
            />

            <CardBody>
              <H6 color="gray">{project.title}</H6>
              <Paragraph color="gray">{project.description}</Paragraph>
            </CardBody>

            <CardFooter>
              <Button
                style={{backgroundColor:'#496480'}}
                size="lg"
                ripple="light"
                onClick={handleClickLikes}
                key={project.id}
              >
                {/* {project?.like?.find((like) => like.id === match?.params?.id) && 
                  !liked && <FavoriteBorderIcon />} */}
                {/* {(project.like?.find((like) => like.id !== match?.params?.id) || 
                  liked) && <FavoriteIcon />} */}

                {!liked ? <FavoriteBorderIcon /> : <FavoriteIcon />}

                {project.like + (liked ? 1 : 0)}
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
