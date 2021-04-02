import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllBooks from "../AllBooks/AllBooks";
import AddBooks from "../AddBooks/AddBooks";

const Admin = () => {
    return (
        <div>
            <div>
                <h1>Welcome Admin. What Do You Wish To Do Today?</h1>
            </div>
            <Router>
                <div className="row">
                    <nav className="col-md-2">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link to="/allbooks"><strong>All Books</strong></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addBooks"><strong>Add Books</strong></Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <div className="col-md-10">
                            <Route path="/addBooks">
                                <AddBooks />
                            </Route>
                            <Route path="/allbooks">
                                <AllBooks />
                            </Route>
                        </div>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default Admin;