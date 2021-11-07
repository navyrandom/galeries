import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DetailsPost from "./DetailsPost";
// import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
// import { DeleteForeverSharp } from "@material-ui/icons";

function PostItem({ title, description, key, src,link }) {
  const [liked, setLiked] = useState(false);
  // const [del, setDel] = useState([]);
  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="item" key={key} style={{ width: "300px", height: "350px" }}>
      <div className="hoverEffect">
        <img alt="illustration-project" src={src} style={{ width: "300px", height: "300px" }} />
        <div className="overlay"></div>
        <button className="button" onClick={handleClick}>
          {!liked ? <FavoriteBorderIcon style={{fontSize: "70px"}} /> : <FavoriteIcon style={{fontSize: "70px"}} />}
        </button>
      </div>
      <h3>{title}</h3>
      <p><a href={link}>{description}</a></p>
      <DetailsPost />
    </div>
  );
}

export default PostItem;
