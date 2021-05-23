import React from 'react';
import ReactDOM from 'react-dom';
import { Route, withRouter, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import LandingPage from './LandingPage';
import Newaccount from "./Newaccount";
import Disqualification from "./Disqualification";
import AccountPage from "./AccountPage";
import reportWebVitals from './reportWebVitals';

const LandingPageWithRouter = withRouter(LandingPage);
const NewAccountPageWithRouter = withRouter(Newaccount);

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={LandingPageWithRouter} />
            <Route path="/newAccount" component={NewAccountPageWithRouter} />
            <Route path="/disqualification" component={Disqualification} />
            <Route path="/accountPage" component={AccountPage} />
        </div>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
