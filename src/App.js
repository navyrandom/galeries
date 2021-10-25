import "./App.css";
import BarNav from "./main/BarNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Presentation from "./fonctionnalities/Presentation";
import NotFound from "./fonctionnalities/NotFound";
import Projects from "./fonctionnalities/Projects";

import "@material-tailwind/react/tailwind.css";

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
          <Route path="/*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
