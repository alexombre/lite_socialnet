import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './loginType';
import Cookies from 'js-cookie';

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST

  }
}


const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    data
  }
}


const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error
  }
}



const login = (identifier, password, dispatch) => {
    const data = { identifier: identifier, password: password };
    let ok; 
    return (dispatch) => {
      dispatch(loginRequest());
      fetch('https://api-minireseausocial.mathis-dyk.fr/auth/local', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {ok = response.ok; return response.json();})
      .then((response) => {
        if (ok) {
          dispatch(loginSuccess(response));
          console.log(response.jwt)
          Cookies.set('token', response.jwt);
        }
        else  
          dispatch(loginFailure(response));
      })
      
    }
}



export { loginRequest, loginSuccess, loginFailure, login }