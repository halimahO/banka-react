import axios from 'axios';
import { toast } from 'react-toastify';
import * as types from '../action-types/index';

export const userTransactionSuccess = transactions => {
  return { type: types.USER_TRANSACTION_SUCCESS, payload: transactions };
};

export const userTransactionError = error => {
  return { type: types.USER_TRANSACTION_ERROR, payload: error };
};

const getUserTransaction = accountNo => {
  return async dispatch => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(
        `${process.env.API_URL}accounts/${accountNo}/transactions`,
        {
          headers: { authorization: `Bearer ${token}` }
        }
      );
      if (response.status === 200) {
        const { data } = response.data;
        const transactions = data.results;

        transactions.map(transaction => {
          const transactionObj = transaction;
          transactionObj.createdon = new Date(
            transactionObj.createdon
          ).toLocaleDateString();
          return transactionObj;
        });

        dispatch(userTransactionSuccess(transactions));
      }
    } catch (err) {
      if (err.message === 'Request failed with status code 404') {
        toast.success('No transaction found on this account');
      } else toast.error('Invalid account number');
      // if (err.message === 'Network Error') {
      //   return toast.error('An error occured. Please try Again');
      // }
      // const { error } = err.response.data;
      // toast.error(error);
      // dispatch(userTransactionError(error));
      // if (
      //   error === undefined ||
      //   Array.isArray(error) ||
      //   typeof error === 'object'
      // ) {
      //   toast.error('Invalid account number');
      // }
    }
  };
};
export default getUserTransaction;
