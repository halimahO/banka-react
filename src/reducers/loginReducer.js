import * as types from '../action-types/index';

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_ERROR:
      return { ...state, error: action.payload };
    case types.LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
