import React from 'react';
import Media from 'react-media';
import './App.css';
import {
  Route, Link, BrowserRouter as Router
} from "react-router-dom";
import Login from './Views/Login';
import Mobile from './Views/Mobile';
import Register from './Views/Register';
import Dashboard from './Views/Dashboard';
function App() {
  return (
    <div>
      <Media queries={{ small: { maxWidth: 599 } }}>
        {matches =>
          matches.small ? (
            <Router>
              <Route path="/" exact component={Mobile}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/dash" component={Dashboard}></Route>
            </Router>
          ) : (
              <Login />
            )
        }
      </Media>
    </div>
  );
}

export default App;
