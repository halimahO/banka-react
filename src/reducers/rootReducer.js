import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signupReducer';
import createAccountReducer from './createAccountReducer';

const rootReducer = combineReducers({
  userLogin: loginReducer,
  userSignup: signUpReducer,
  newAccount: createAccountReducer
});

export default rootReducer;
