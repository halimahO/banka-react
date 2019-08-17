import * as types from '../action-types/index';

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case types.INITIAL_STATE:
      return { ...state, message: action.payload };
    case types.LOADING:
      return { ...state, message: action.payload };
    case types.ERROR:
      return { ...state, error: action.payload };
    case types.SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
