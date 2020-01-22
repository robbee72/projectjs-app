import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";

import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import FunctionPage from "../components/FunctionPage";
import HyperTextPage from "../components/HyperTextPage";
import JavaScriptHistoryPage from "../components/JavaScriptHistoryPage.js";
import Terminology from "../components/Terminology";
import Resume from "../components/ResumePage";
import AboutPage from "../components/Info/AboutPage";
import ContactPage from "../components/Info/ContactPage";
import Resources from "../components/Info/Resources";

// TODO make Login private and redirect to landing
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/landing' component={LandingPage} />
        <Route path='/header' component={Header} />
        <Route path='/function' component={FunctionPage} />
        <Route path='/jshistory' component={JavaScriptHistoryPage} />
        <Route path='/hypertext' component={HyperTextPage} />
        <Route path='/terms' component={Terminology} />
        <Route path='/resume' component={Resume} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/resources' component={Resources} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
