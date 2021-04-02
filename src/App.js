import React, { createContext, useState } from "react";
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
import NoMatch from "./components/NoMatch/NoMatch";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p className="btn btn-primary">User Name: {loggedInUser.name}</p>
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
            </ul>
          </nav>

          <Switch>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
      </UserContext.Provider>
      );
}

      export default App;
