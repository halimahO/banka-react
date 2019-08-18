import axios from 'axios';
import { toast } from 'react-toastify';
import * as types from '../action-types';

export const signupSuccess = user => {
  return { type: types.SIGNUP_SUCCESS, payload: user };
};

export const signupError = error => {
  return { type: types.SIGNUP_ERROR, payload: error };
};

const signupAction = (user, history) => {
  return async dispatch => {
    try {
      const response = await axios.post(
        `${process.env.API_URL}auth/signup`,
        user
      );
      if (response.status === 201) {
        const { data } = response.data;
        localStorage.setItem('token', data.token);
        toast.success('Registration Successful');
        setTimeout(() => {
          history.push('/dashboard');
        }, 3000);
        dispatch(signupSuccess(data));
      }
    } catch (err) {
      if (err.message === 'Network Error') {
        return toast.error('An error occured. Please try Again');
      }
      const { error } = err.response.data;
      toast.error(error);
      dispatch(signupError(error));
    }
  };
};
export default signupAction;
