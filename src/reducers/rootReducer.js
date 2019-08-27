import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signupReducer';
import createAccountReducer from './createAccountReducer';
import authReducer from './auth.reducer';
import UserTransactionReducer from './UserTransactionReducer';
import transactionReducer from './transactionReducer';

const rootReducer = combineReducers({
  userLogin: loginReducer,
  userSignup: signUpReducer,
  newAccount: createAccountReducer,
  auth: authReducer,
  userTransactions: UserTransactionReducer,
  transactions: transactionReducer
});

export default rootReducer;
