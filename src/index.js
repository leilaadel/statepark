import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import Landing from "./Landing";
import Navbar from "./Navbar";
import Music from "./Music";
import Tour from "./Tour";
import News from "./News";
import Login from './Login';
import StudioSession from "./StudioSession";
import TourDates from "./TourDates";
import NewDrummer from "./NewDrummer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <Route exact path="/" component={Landing}/>
      <Route path="/music" component={Music} />
      <Route path="/tour" component={Tour} />
      <Route path="/news" component={News} />
      <Route path="/login" component={Login} />
      <Route exact path="/news/studiosession" component={StudioSession} />
      <Route exact path="/news/newtourdates" component={TourDates} />
      <Route exact path="/news/newdrummer" component={NewDrummer} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
