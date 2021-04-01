import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import Orders from "./components/Orders/Orders";
import './App.css';
import AllBooks from "./components/AllBooks/AllBooks";
import NoMatch from "./components/NoMatch/NoMatch";
import AddBooks from "./components/AddBooks/AddBooks";

function App() {
  return (
    <Router>
      <div>
        <nav className="container navbar">
          <p className="navbar-brand text-primary"><strong>Bookmark</strong></p>
          <ul>
            <li>
              <Link to="/orders"><strong>Orders</strong></Link>
            </li>
            <li>
              <Link to="/admin"><strong>Admin</strong></Link>
            </li>
            <li>
              <Link to="/"><strong>Home</strong></Link>
            </li>
            <li>
              <Link to="/allbooks"><strong>All Books</strong></Link>
            </li>
            <li>
              <Link to="/addBooks"><strong>Add Books</strong></Link>
            </li>
          </ul>
        </nav>

        <Switch>
        <Route path="/addBooks">
            <AddBooks />
          </Route>
          <Route path="/allbooks">
            <AllBooks />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
