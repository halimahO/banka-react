import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { toast } from 'react-toastify';
import {
  USER_TRANSACTION_SUCCESS,
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
          results: [
            {
              createdon: '2019/3/1'
            }
          ]
        }
      }
    };

    axios.get.mockResolvedValueOnce(mockData);

    const expectedActions = [
      { payload: mockData.data.data.results, type: USER_TRANSACTION_SUCCESS }
    ];

    store.dispatch(getUserTransaction(userCredentials)).then(() => {
      jest.runOnlyPendingTimers();

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('User Transaction Reducer', () => {
  it('Should return a new state if it recieves a get user transactions success action type', () => {
    const transaction = [];
    const newState = userTransactionReducer(undefined, {
      type: USER_TRANSACTION_SUCCESS,
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
