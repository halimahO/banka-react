import '@babel/polyfill';
import moxios from 'moxios';
import mockAxios from 'axios';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  DEBIT_SUCCESS,
  DEBIT_ERROR,
  CREDIT_SUCCESS,
  CREDIT_ERROR
} from '../action-types';
import transactionReducer from '../reducers/transactionReducer';

describe('Transaction Reducer', () => {
  it('Should return a new state if it recieves a debit action type', () => {
    const transaction = {
      transactionId: 97,
      accountnumber: '1346955789',
      amount: 1000,
      cashier: 1,
      transactionType: 'credit',
      accountBalance: 1000
    };
    const newState = transactionReducer(undefined, {
      type: DEBIT_SUCCESS,
      payload: transaction
    });
    expect(newState).toEqual({
      transaction
    });
  });

  it('Should return a new state if it recieves debit user error action type', () => {
    const message = 'debit user failed';
    const newState = transactionReducer(undefined, {
      type: DEBIT_ERROR,
      payload: message
    });
    expect(newState).toEqual({
      error: 'debit user failed'
    });
  });
  it('Should return a new state if it recieves a credit user successful action type', () => {
    const message = 'credit user successful';
    const newState = transactionReducer(undefined, {
      type: CREDIT_SUCCESS,
      payload: message
    });
    expect(newState).toEqual({
      transaction: 'credit user successful'
    });
  });

  it('Should return a new state if it recieves a credit user error action type', () => {
    const message = 'credit user failed';
    const newState = transactionReducer(undefined, {
      type: CREDIT_ERROR,
      payload: message
    });
    expect(newState).toEqual({
      error: 'credit user failed'
    });
  });
});
