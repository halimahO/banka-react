import * as types from '../action-types/index';

const allAccountsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_ACCOUNTS:
      return { ...state, accounts: action.payload };
    default:
      return state;
  }
};

export default allAccountsReducer;
