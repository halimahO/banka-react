import axios from 'axios';
import { toast } from 'react-toastify';
import * as types from '../action-types/index';

export const createAccountSuccess = user => {
  return { type: types.CREATE_ACCOUNT_SUCCESS, payload: user };
};

export const createAccountError = error => {
  return { type: types.CREATE_ACCOUNT_ERROR, payload: error };
};

export const createAccountAction = type => {
  return async dispatch => {
    const token = localStorage.getItem('token');
    try {
      if (type === null) {
        return toast.error('Account type is required');
      }
      const response = await axios.post(
        `${process.env.API_URL}accounts`,
        type,
        {
          headers: { authorization: `Bearer ${token}` }
        }
      );
      if (response.status === 201) {
        const { data } = response.data;
        toast.success(
          `Account created Successfully. Your account number is: ${data.accountNumber}`
        );
        dispatch(createAccountSuccess(data));
      }
    } catch (err) {
      if (err.message === 'Network Error') {
        return toast.error('An error occured. Please try Again');
      }
      const { error } = err.response.data;
      toast.error(error);
      dispatch(createAccountError(error));
    }
  };
};
export default createAccountAction;
