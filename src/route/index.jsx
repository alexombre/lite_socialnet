import React  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Register from '../pages/Register';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import User from '../pages/User';
import Login from '../pages/Login';
import Navbar from './components/Navbar';
import AuthRoute from './components/AuthRoute'

const RouterCustom = () => {
    return (
        <>
            <Router>
              <div>
                <Navbar />
                 <Switch>
                    <Route exact path={`/`}>
                      <Home />
                    </Route>
                    <AuthRoute path="/profile" component={Profile} />
                    <Route path={`/register`}>
                      <Register />
                    </Route>
                    
                    <Route path={`/login`}>
                      <Login />
                    </Route>
                  </Switch>
                  <Switch>
                    <Route path={`/user/:id`}>
                      <User />
                    </Route>
                  </Switch>
              </div>
            </Router>
        </>
        );
};

export default RouterCustom;