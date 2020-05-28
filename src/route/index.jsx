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
import Navbar from '../components/Navbar'

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
                    <Route path={`/register`}>
                      <Register />
                    </Route>
                    <Route path={`/profile`}>
                      <Profile />
                    </Route>
                  </Switch>
                  <Switch>
                    <Route path={`/user/:username`}>
                      <User />
                    </Route>
                  </Switch>
              </div>
            </Router>
        </>
        );
};

export default RouterCustom;