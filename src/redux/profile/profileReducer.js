import { PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAILURE } from './profileType';

const initialState = {
  loading: false,
  error: '',
  data: {}
}

export const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case PROFILE_REQUEST:
      return {
        ...state,
        loading: true
      }
    case PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: ''
      }  
    case PROFILE_FAILURE:
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