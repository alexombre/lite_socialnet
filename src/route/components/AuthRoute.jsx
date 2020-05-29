import React  from 'react';
import Cookies from 'js-cookie'
import {
  Redirect,
  Route,
} from "react-router-dom";


const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Cookies.get('token') ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    )
  )} />
)

export default AuthRoute