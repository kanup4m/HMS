import React from 'react';
import Media from 'react-media';
import './App.css';
import {
  Route, Link, BrowserRouter as Router
} from "react-router-dom";
import Mobile from './Views/Mobile';
import Register from './Views/Register';
import Dashboard from './Views/Dashboard';
import Notification from './Views/Notification'
import BookRoom from './Views/BookRoom';
import NotFound from './Views/404';
import RequestSent from './Views/RequestSent';
import Floor from './Views/Floor';
import Login from './Views/Web/Login';
import BookRoomSingle from "./Views/BookRoomSingle";
import RequestSentSingle from './Views/RequestSentSingle';
function App() {
  return (
    <div>
      <Media queries={{ small: { maxWidth: 599 } }}>
        {matches =>
          matches.small ? (
            <Router>
              <Route path="/" exact component={Mobile}></Route>
              <Route path="/register" exact component={Register}></Route>
              <Route path="/dashboard" exact component={Dashboard}></Route>
              <Route path="/notification" exact component={Notification} />
              <Route path="/book-room" exact component={BookRoom} />
              <Route path="/request-sent" exact component={RequestSent} />
              <Route path="/select-room" exact component={Floor} />
              <Route path="/request-sent-single" exact component={RequestSentSingle} />
              <Route path="/book-room-single" exact component={BookRoomSingle} />
            </Router>
          ) : (
              <Router>
                <Route path="/" component={Login} />
              </Router>
            )
        }
      </Media>
    </div>
  );
}

export default App;
