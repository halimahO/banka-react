import axios from 'axios';
import { toast } from 'react-toastify';
import * as types from '../action-types/index';
import { setCurrentUser } from './auth.action';

export const loginSuccess = user => {
  return { type: types.LOGIN_SUCCESS, payload: user };
};

export const loginError = error => {
  return { type: types.LOGIN_ERROR, payload: error };
};

export const loginAction = (user, history) => {
  return async dispatch => {
    try {
      const response = await axios.post(
        `${process.env.API_URL}auth/signin`,
        user
      );
      if (response.status === 200) {
        const { data } = response.data;
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data));
        toast.success('Log In Successful');
        setTimeout(() => {
          history.push('/dashboard');
          dispatch(setCurrentUser(data));
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
