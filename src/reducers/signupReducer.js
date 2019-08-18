import * as types from '../action-types/index';

const signupReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SIGNUP_ERROR:
      return { ...state, error: action.payload };
    case types.SIGNUP_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default signupReducer;
