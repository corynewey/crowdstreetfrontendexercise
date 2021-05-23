import React from 'react';
import ReactDOM from 'react-dom';
import { Route, withRouter, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import LandingPage from './LandingPage';
import Newaccount from "./Newaccount";
import Disqualification from "./Disqualification";
import reportWebVitals from './reportWebVitals';

const LandingPageWithRouter = withRouter(LandingPage);

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={LandingPageWithRouter} />
            <Route path="/newAccount" component={Newaccount} />
            <Route path="/disqualification" component={Disqualification} />
        </div>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
