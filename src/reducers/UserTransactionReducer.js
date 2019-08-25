import * as types from '../action-types/index';

const UserTransactionReducer = (state = [], action) => {
  switch (action.type) {
    case types.USER_TRANSACTION_SUCCESS:
      return action.payload;
    case types.USER_TRANSACTION_ERROR:
      return { ...state, transactions: action.payload };
    default:
      return state;
  }
};

export default UserTransactionReducer;
