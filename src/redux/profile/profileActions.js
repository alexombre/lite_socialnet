import { PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAILURE } from './profileType';
import Cookies from 'js-cookie';


const profileRequest = () => {
  return {
    type: PROFILE_REQUEST

  }
}


const profileSuccess = (data) => {
  return {
    type: PROFILE_SUCCESS,
    data
  }
}


const profileFailure = (error) => {
  return {
    type: PROFILE_FAILURE,
    error
  }
}



const profileUpdate = (username, email, description, id, history, dispatch) => {
    const data = { username: username, email: email, id };
    let ok; 
    return (dispatch) => {
      dispatch(profileRequest());
      fetch(`https://api-minireseausocial.mathis-dyk.fr/users/${id}`,{
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${Cookies.get('token')}`,    
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {ok = response.ok; return response.json();})
      .then((response) => {
        if (ok) {
          dispatch(profileSuccess(response));
          console.log(response)
        }
        else  
          dispatch(profileFailure(response));
      })
      
    }
}



export { profileRequest, profileSuccess, profileFailure, profileUpdate }