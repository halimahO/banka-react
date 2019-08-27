import axios from 'axios';
import { toast } from 'react-toastify';
import * as types from '../action-types/index';

export const debitSuccess = transaction => {
  return { type: types.DEBIT_SUCCESS, payload: transaction };
};

export const debitError = error => {
  return { type: types.DEBIT_ERROR, payload: error };
};

export const creditSuccess = transaction => {
  return { type: types.CREDIT_SUCCESS, payload: transaction };
};

export const creditError = error => {
  return { type: types.CREDIT_ERROR, payload: error };
};

export const debit = (accountNo, amount) => {
  return async dispatch => {
    try {
      const token = localStorage.getItem('token');

      const response = await axios.post(
        `${process.env.API_URL}transactions/${accountNo}/debit`,
        amount,
        {
          headers: { authorization: `Bearer ${token}` }
        }
      );

      if (response.status === 201) {
        const { data } = response.data;
        toast.success('Debit transaction successful');
        dispatch(debitSuccess(data));
        return data;
      }
    } catch (err) {
      if (err.message === 'Network Error') {
        return toast.error('An error occured. Please try Again');
      }
      const { error } = err.response.data;
      toast.error(error);
      dispatch(debitError(error));
      if (
        error === undefined ||
        Array.isArray(error) ||
        typeof error === 'object'
      ) {
        /* istanbul ignore next */
        toast.error('Account number or Amount is invalid');
      }
    }
  };
};

export const credit = (accountNo, amount) => {
  return async dispatch => {
    try {
      const token = localStorage.getItem('token');

      const response = await axios.post(
        `${process.env.API_URL}transactions/${accountNo}/credit`,
        amount,
        {
          headers: { authorization: `Bearer ${token}` }
        }
      );

      if (response.status === 201) {
        const { data } = response.data;
        toast.success('Credit transaction successful');
        dispatch(creditSuccess(data));
        return data;
      }
    } catch (err) {
      if (err.message === 'Network Error') {
        return toast.error('An error occured. Please try Again');
      }
      const { error } = err.response.data;
      toast.error(error);
      dispatch(creditError(error));
      if (
        error === undefined ||
        Array.isArray(error) ||
        typeof error === 'object'
      ) {
        /* istanbul ignore next */
        toast.error('Account number or Amount is invalid');
      }
    }
  };
};
