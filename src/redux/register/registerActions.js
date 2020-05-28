import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from './registerType';
import Cookies from 'js-cookie';

const registerRequest = () => {
  return {
    type: REGISTER_REQUEST

  }
}


const registerSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    data
  }
}


const registerFailure = (error) => {
  return {
    type: REGISTER_FAILURE,
    error
  }
}



const register = (username, email, password, dispatch) => {
    const data = { username: username, email: email, password: password };
    let ok; 
    return (dispatch) => {
      dispatch(registerRequest());
      fetch('https://api-minireseausocial.mathis-dyk.fr/auth/local/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {ok = response.ok; return response.json();})
      .then((response) => {
        if (ok) {
          dispatch(registerSuccess(response));
          console.log(response)
          Cookies.set('token', response.jwt);
        }
        else  
          dispatch(registerFailure(response));
          
      })
      
    }
}

export { registerRequest, registerSuccess, registerFailure, register }