import "./App.css";
import BarNav from "./main/BarNav";
import "@material-tailwind/react/tailwind.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Presentation from "./fonctionnalities/Presentation";
import NotFound from "./fonctionnalities/NotFound";
import "tailwindcss/tailwind.css";
import Projects from './fonctionnalities/Projects';
import ImagesSlider from "./fonctionnalities/ImagesSlider";

function App() {
  return (
    <div>
      <Router>
        <BarNav />
        <Switch>
          <Route
            exact
            path="/"
            render={(matchProps) => <Presentation {...matchProps} />}
          />
          <Route
            exact
            path="/portfolio"
            render={(matchProps) => <Projects {...matchProps} />}
            //correction
          />
           <Route exact path="/test"
           render={(matchProps) => <ImagesSlider {...matchProps} />}
          // first idea 
          />
          <Route
            path="/*"
            render={() => {
              <NotFound />;
            }}
          />
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
