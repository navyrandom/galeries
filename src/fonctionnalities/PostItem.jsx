import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
// import { DeleteForeverSharp } from "@material-ui/icons";

function PostItem({ title, description, key }) {
  const [liked, setLiked] = useState(false);
  const [del, setDel] = useState([]);
  const handleClick = () => {
    setLiked(!liked);
  };

  // const handleDelete = () => {
  //   console.log('rien')
  // };
  return (
    <div className="card" key={key}>
      <div className="body">
        {title}
        <p>{description}</p>
      </div>
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
