import '@babel/polyfill';
import moxios from 'moxios';
import mockAxios from 'axios';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  USER_TRANSACTION_SUCCES,
  USER_TRANSACTION_ERROR
} from '../action-types';
import userTransactionReducer from '../reducers/UserTransactionReducer';

describe('User Transaction Reducer', () => {
  it('Should return a new state if it recieves a get user transactions success action type', () => {
    const transaction = [];
    const newState = userTransactionReducer(undefined, {
      type: USER_TRANSACTION_SUCCES,
      payload: transaction
    });
    expect(newState).toEqual(transaction);
  });

  it('Should return a new state if it recieves get user transactions error action type', () => {
    const message = 'get user taransactions failed';
    const newState = userTransactionReducer(undefined, {
      type: USER_TRANSACTION_ERROR,
      payload: message
    });
    expect(newState).toEqual({
      transactions: message
    });
  });
});
