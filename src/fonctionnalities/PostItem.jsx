import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
// import { DeleteForeverSharp } from "@material-ui/icons";

function PostItem({ title, description, key, src }) {
  const [liked, setLiked] = useState(false);
  // const [del, setDel] = useState([]);
  const handleClick = () => {
    setLiked(!liked);
  };

  // const handleDelete = () => {
  //   console.log('rien')
  // };
  return (
    <div className="card" key={key}>
      <div className="imgillustr">
        <img alt="" src={src} style={{ width: "293px", height: "293px" }} />
      </div>
      {title}
      <p>{description}</p>

      <button onClick={handleClick}>
        {!liked ? <FavoriteBorderIcon /> : <FavoriteIcon />}
        {liked && "Thanks"}
      </button>
      {/* <button onClick={handleDelete}>
        {del ? <DeleteOutlineIcon /> : <DeleteForeverSharp />}
      </button> */}
    </div>
  );
}

export default PostItem;
