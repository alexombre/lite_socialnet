import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './loginType'

const initialState = {
  loading: false,
  error: '',
  data: {}
}

export const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: ''
      }  
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        data: {}
      }    
      
    default:
      return state
  }
}