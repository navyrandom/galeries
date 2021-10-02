import React from "react";
import { useHistory } from "react-router";

function NotFound() {
  const history = useHistory();
  const redirectToHome = () => {
    history.push("/");
  };
  return (
    <div>
      <h1>You are not lost, you're just wandering</h1>
      <div onClick={redirectToHome}>Go back to my portfolio</div>
    </div>
  );
}

export default NotFound;
