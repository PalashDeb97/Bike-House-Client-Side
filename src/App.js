import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Explore from "./Pages/Explore/Explore";
import ExploreCard from "./Pages/ExploreCard/ExploreCard";
import History from "./Pages/History/History";
import Home from "./Pages/Home/Home/Home";
import LogIn from "./Pages/LogIn/LogIn/LogIn";
import Register from "./Pages/LogIn/Register/Register";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Reviews from "./Pages/Reviews/Reviews";
import Header from "./Pages/shared/Header/Header";

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/explore">
            <Explore></Explore>
          </Route>

          <PrivateRoute exact path="/explore/:id">
            <ExploreCard></ExploreCard>
          </PrivateRoute>

          <Route exact path="/reviews">
            <Reviews></Reviews>
          </Route>
          <Route exact path="/history">
            <History></History>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>

          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <Route exact path="/login">
            <LogIn></LogIn>
          </Route>

          <Route exact path="/register">
            <Register></Register>
          </Route>

          <Route exact path="*">
            <PageNotFound></PageNotFound>
          </Route>

        </Switch>
      </Router>
    </AuthProvider>
    </>
  );
}

export default App;
