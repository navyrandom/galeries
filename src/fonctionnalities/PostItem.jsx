import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import axios from "axios";
import { DeleteForeverSharp } from "@material-ui/icons";

function PostItem({ title, description, key }) {
  const [liked, setLiked] = useState(false);

  const [del, setDel] = useState([]);
  const handleClick = () => {
    setLiked(!liked);
  };

  const handleDelete = (postId) => {
    axios.delete(`http://localhost:3031/portfolio/${postId}`).then(() => {
      const filteredPosts = del.filter((post) => post.id !== postId);
      setDel(filteredPosts);
    });
  };
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
      <button onClick={handleDelete}>
        {del ? <DeleteOutlineIcon /> : <DeleteForeverSharp />}
      </button>
    </div>
  );
}

export default PostItem;
