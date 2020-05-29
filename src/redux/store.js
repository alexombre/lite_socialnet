import { createStore, combineReducers } from 'redux';
import { registerReducer } from './register/registerReducer';
import { loginReducer } from './login/loginReducer';
import { profileReducer } from './profile/profileReducer';
import { postReducer } from './post/postReducer';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  profile: profileReducer,
  post: postReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware) ); 
store.subscribe(() => console.log(store.getState()));

export default store;