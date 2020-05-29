import { POST_REQUEST, POST_SUCCESS, POST_FAILURE } from './postType';

const initialState = {
  loading: false,
  error: '',
  data: {}
}

export const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true
      }
    case POST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: ''
      }  
    case POST_FAILURE:
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