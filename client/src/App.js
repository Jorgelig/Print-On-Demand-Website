import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Home.js';
import Store from './Store.js';
import './App.css';

export default function App(){
  return(
    <Router>
      <div>
        {/* Navbar starts here */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Store">Store</Link>
            </li>
          </ul>
        </nav>
        {/* Navbar ends here */}

        {/* This Switch controlls what is rendered depending on what the user clicks on */}
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/Store"><Store /></Route>
        </Switch>
      </div>
    </Router>
  );
}


