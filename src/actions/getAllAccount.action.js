import axios from 'axios';
import * as types from '../action-types/index';

export const addAllUserAccount = accounts => {
  return { type: types.ADD_ACCOUNTS, payload: accounts };
};

export const fetchUserAccounts = emailAddress => {
  return async dispatch => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(
        `${process.env.API_URL}user/${emailAddress}/accounts`,
        {
          headers: { authorization: `Bearer ${token}` }
        }
      );

      if (response.status === 200) {
        const { data } = response.data;
        dispatch(addAllUserAccount(data.accounts));
      }
    } catch (err) {
      return err.message;
    }
  };
};
