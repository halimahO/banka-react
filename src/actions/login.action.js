import axios from 'axios';
import { toast } from 'react-toastify';
import * as types from '../action-types/index';

export const initialState = message => {
  return { type: types.INITIAL_STATE, payload: message };
};

export const loginSuccess = user => {
  return { type: types.SUCCESS, payload: user };
};

export const loginError = error => {
  return { type: types.ERROR, payload: error };
};

export const loadingState = message => {
  return { type: types.LOADING, payload: message };
};

const loginAction = (user, history) => {
  return async dispatch => {
    try {
      dispatch(initialState('Initial state'));
      const response = await axios.post(
        `${process.env.API_URL}auth/signin`,
        user
      );
      dispatch(loadingState('Loading state'));
      if (response.status === 200) {
        const { data } = response.data;
        localStorage.setItem('token', data.token);
        console.log(toast);
        toast.success('Log In Successful');
        setTimeout(() => {
          history.push('/dashboard');
        }, 3000);
        dispatch(loginSuccess(data));
      }
    } catch (err) {
      if (err.message === 'Network Error') {
        return toast.error('An error occured. Please try Again');
      }
      const { error } = err.response.data;
      toast.error('Invalid email/password provided');

      dispatch(loginError(error));
    }
  };
};
export default loginAction;
