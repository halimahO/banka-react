import * as types from '../action-types/index';

const createAccountReducer = (state = {}, action) => {
  switch (action.type) {
    case types.CREATE_ACCOUNT_ERROR:
      return { ...state, error: action.payload };
    case types.CREATE_ACCOUNT_SUCCESS:
      return { ...state, account: action.payload };
    default:
      return state;
  }
};

export default createAccountReducer;
