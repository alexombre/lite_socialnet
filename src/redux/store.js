import { createStore, combineReducers } from 'redux';
import { registerReducer } from './register/registerReducer';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  register: registerReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware) ); 
store.subscribe(() => console.log(store.getState()));

export default store;