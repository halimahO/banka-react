import { SET_CURRENT_USER } from '../action-types';

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logout = () => dispatch => {
  localStorage.removeItem('token');
  dispatch(setCurrentUser({}));
};
