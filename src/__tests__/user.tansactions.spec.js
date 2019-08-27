import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { toast } from 'react-toastify';
import {
  USER_TRANSACTION_SUCCES,
  USER_TRANSACTION_ERROR
} from '../action-types';
import { getUserTransaction } from '../actions/user-account-action';
import userTransactionReducer from '../reducers/UserTransactionReducer';
jest.mock('axios');

describe('Get user transactions actions', () => {
  const userCredentials = {
    accountNo: 1234567890
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

  it('Should Trigger the GET USER TRANSACTIONS dispatch function', async () => {
    jest.useFakeTimers();
    const mockData = {
      status: 200,
      data: {
        data: {
          id: 1,
          createdon: '24/08/2019',
          type: 'credit',
          accountnumber: '4015263546',
          amount: 1000,
          oldbalance: 0,
          newbalance: 1000
        }
      }
    };

    axios.post.mockResolvedValueOnce(mockData);

    const expectedActions = [
      { payload: mockData.data, type: USER_TRANSACTION_SUCCES }
    ];

    store.dispatch(getUserTransaction(userCredentials)).then(() => {
      jest.runOnlyPendingTimers();

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  // it('Should Trigger the LOGIN_ERROR dispatch function', async () => {
  //   const mockData = {
  //     response: {
  //       data: {
  //         status: 401,
  //         error: 'Invalid username/password'
  //       }
  //     }
  //   };

  //   axios.post.mockRejectedValueOnce(mockData);

  //   const historyObject = {
  //     push: jest.fn()
  //   };

  //   const expectedActions = [
  //     { type: LOGIN_ERROR, payload: mockData.response.data.error }
  //   ];
  //   store.dispatch(loginAction(userCredentials, historyObject)).then(() => {
  //     expect(store.getActions()).toEqual(expectedActions);
  //   });
  // });

  // it('Should return a toast on network error', async () => {
  //   const mockData = {
  //     message: 'Network Error'
  //   };

  //   const spy = jest.spyOn(toast, 'error');

  //   axios.post.mockRejectedValueOnce(mockData);

  //   store.dispatch(loginAction(userCredentials, null)).then(() => {
  //     expect(spy).toHaveBeenCalledWith('An error occured. Please try Again');
  //   });
  // });
});

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
