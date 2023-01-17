import React from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch} from "react-router-dom";

// Styles/Fonts
import "./assets/css/fonts.css"
import "./assets/scss/material-kit-react.scss";

// Views
import LandingPage from "./views/LandingPage/LandingPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import HomePage from "./views/HomePage/HomePage.js"

var hist = createBrowserHistory();

const App = function () {
  
  return (
    <BrowserRouter history={hist}>
    <Switch>
      <Route path="/home" component={HomePage}/>
      <Route path="/auth" component={RegisterPage}/>
      <Route path="/" component={LandingPage} />
    </Switch>
  </BrowserRouter>);
}

export default App;