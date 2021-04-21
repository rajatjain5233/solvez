import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Languagescount from './Languagescount';
import Selfiefunctionality from './selfiefunctionality';
import Copyclipboard from './Copyclipboard';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './header';


const Routing = () => {
  return(
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/languagescount" component={Languagescount} />
        <Route path="/copyclipboard" component={Copyclipboard} />
        <Route path="/selfiefunctionality" component={Selfiefunctionality} />
      </Switch>
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
