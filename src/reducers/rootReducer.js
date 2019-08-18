import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signupReducer';

const rootReducer = combineReducers({
  userLogin: loginReducer,
  userSignup: signUpReducer
});

export default rootReducer;
