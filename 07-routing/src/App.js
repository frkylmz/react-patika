import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

// pages
import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/users" activeClassName="active">
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;