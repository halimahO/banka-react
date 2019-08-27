import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { debit, credit } from '../actions/transaction.action';
import { toast } from 'react-toastify';
import {
  DEBIT_SUCCESS,
  DEBIT_ERROR,
  CREDIT_SUCCESS,
  CREDIT_ERROR
} from '../action-types';
import transactionReducer from '../reducers/transactionReducer';
jest.mock('axios');

describe('Transactions Actions', () => {
  const transactionDetails = {
    amount: {
      amount: 1000
    },
    accountNumber: 1234567890
  };
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  let store;
  beforeEach(() => {
    store = mockStore({});
    jest.resetAllMocks();
  });
  afterEach(() => {
    store.clearActions();
  });

  it('Should Trigger the DEBIT dispatch function', async () => {
    jest.useFakeTimers();
    const mockData = {
      status: 201,
      data: {
        data: {
          transactionId: 100,
          accountnumber: 4015263546,
          amount: 1000000,
          cashier: 1,
          transactionType: 'debit',
          accountBalance: 10000000
        }
      }
    };

    axios.post.mockResolvedValueOnce(mockData);

    const expectedActions = [
      { payload: mockData.data.data, type: DEBIT_SUCCESS }
    ];

    store
      .dispatch(
        debit(transactionDetails.accountNumber, transactionDetails.amount)
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it('Should return a toast on network error', async () => {
    const mockData = {
      message: 'Network Error'
    };

    const spy = jest.spyOn(toast, 'error');

    axios.post.mockRejectedValueOnce(mockData);

    store
      .dispatch(
        debit(transactionDetails.accountNumber, transactionDetails.amount)
      )
      .then(() => {
        expect(spy).toHaveBeenCalledWith('An error occured. Please try Again');
      });
  });

  it('Should Trigger the DEBIT_ERROR dispatch function', async () => {
    const mockData = {
      response: {
        data: {
          status: 400,
          error: 'An error occured'
        }
      }
    };

    axios.post.mockRejectedValueOnce(mockData);

    const expectedActions = [
      { type: DEBIT_ERROR, payload: mockData.response.data.error }
    ];
    store
      .dispatch(
        debit(transactionDetails.accountNumber, transactionDetails.amount)
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('Should Trigger the CREDIT dispatch function', async () => {
    jest.useFakeTimers();
    const mockData = {
      status: 201,
      data: {
        data: {
          transactionId: 100,
          accountnumber: 4015263546,
          amount: 1000000,
          cashier: 1,
          transactionType: 'debit',
          accountBalance: 10000000
        }
      }
    };

    axios.post.mockResolvedValueOnce(mockData);

    const expectedActions = [
      { payload: mockData.data.data, type: CREDIT_SUCCESS }
    ];

    store
      .dispatch(
        credit(transactionDetails.accountNumber, transactionDetails.amount)
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it('Should return a toast on network error', async () => {
    const mockData = {
      message: 'Network Error'
    };

    const spy = jest.spyOn(toast, 'error');

    axios.post.mockRejectedValueOnce(mockData);

    store
      .dispatch(
        credit(transactionDetails.accountNumber, transactionDetails.amount)
      )
      .then(() => {
        expect(spy).toHaveBeenCalledWith('An error occured. Please try Again');
      });
  });

  it('Should Trigger the CREDIT_ERROR dispatch function', async () => {
    const mockData = {
      response: {
        data: {
          status: 400,
          error: 'An error occured'
        }
      }
    };

    axios.post.mockRejectedValueOnce(mockData);

    const expectedActions = [
      { type: CREDIT_ERROR, payload: mockData.response.data.error }
    ];
    store
      .dispatch(
        credit(transactionDetails.accountNumber, transactionDetails.amount)
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

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
