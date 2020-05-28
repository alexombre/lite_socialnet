import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from './registerType'

const initialState = {
  loading: false,
  error: '',
  data: {}
}

export const registerReducer = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: ''
      }  
    case REGISTER_FAILURE:
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