import * as types from '../action-types/index';

const transactionReducer = (state = {}, action) => {
  switch (action.type) {
    case types.DEBIT_ERROR:
      return { ...state, error: action.payload };
    case types.DEBIT_SUCCESS:
      return { ...state, transaction: action.payload };
    case types.CREDIT_ERROR:
      return { ...state, error: action.payload };
    case types.CREDIT_SUCCESS:
      return { ...state, transaction: action.payload };
    default:
      return state;
  }
};

export default transactionReducer;
