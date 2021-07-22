import "./App.css";
import BarNav from "./main/BarNav";
import "@material-tailwind/react/tailwind.css";
import Projects from "./fonctionnalities/Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Presentation from "./fonctionnalities/Presentation";
import NotFound from "./fonctionnalities/NotFound";
import Minimal from "./main/Minimal";
// import Contact from "./fonctionnalities/Contact";
import "tailwindcss/tailwind.css";

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
          />
          <Route
            render={() => {
              <Minimal>
                <NotFound />
              </Minimal>;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
