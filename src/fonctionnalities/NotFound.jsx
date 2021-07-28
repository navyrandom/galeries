import React from 'react';
import { Link } from "@material-ui/core";
import { useHistory } from "react-router";

function NotFound() {
    const history = useHistory();
  const redirectToHome = () => {
    history.push("/");
  };
    return (
        <div>
             <h1>404 Not Found</h1>
             <div onClick={redirectToHome}>
                 Go back to my <Link to="/"> portfolio </Link>
                 </div>
        </div>
    );
}

export default NotFound;