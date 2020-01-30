import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";

import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import FunctionPage from "../components/FunctionPage";
import HyperTextPage from "../components/HyperTextPage";
import CascadePage from "../components/CascadePage";
import JavaScriptHistoryPage from "../components/JavaScriptHistoryPage.js";
import Terminology from "../components/Terminology";
import Hookin from "../components/with_hooks/Hookin";
import ResumePage from "../components/ResumePage";
import AboutPage from "../components/Info/AboutPage";
import ContactPage from "../components/Info/ContactPage";
import Resources from "../components/Info/Resources";
import NamedFunctions from "../components/typesFunctions/NamedFunctions";
import FunctionExpression from "../components/typesFunctions/FunctionExpression";
import ArrowFunctions from "../components/typesFunctions/ArrowFunctions";

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
        <Route path='/cascade' component={CascadePage} />
        <Route path='/terms' component={Terminology} />
        <Route path='/hook' component={Hookin} />
        <Route path='/resume' component={ResumePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/resources' component={Resources} />
        <Route path='/namedfunction' component={NamedFunctions} />
        <Route path='/functionexpression' component={FunctionExpression} />
        <Route path='/arrowfunctions' component={ArrowFunctions} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
