import { POST_REQUEST, POST_SUCCESS, POST_FAILURE } from './postType';
import Cookies from "js-cookie"


const postRequest = () => {
  return {
    type: POST_REQUEST

  }
}


const postSuccess = (data) => {
  return {
    type: POST_SUCCESS,
    data
  }
}


const postFailure = (error) => {
  return {
    type: POST_FAILURE,
    error
  }
}



const postCreate = (text, id, dispatch) => {
    const data = { text: text, id: id, };
    let ok; 
    return (dispatch) => {
      dispatch(postRequest());
      fetch("https://api-minireseausocial.mathis-dyk.fr/posts",{
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${Cookies.get('token')}`,    
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {ok = response.ok; return response.json();})
      .then((response) => {
        if (ok) {
          dispatch(postSuccess(response));
          console.log(response)
        }
        else  
          dispatch(postFailure(response));
      })
      
    }
}



export { postRequest, postSuccess, postFailure, postCreate }