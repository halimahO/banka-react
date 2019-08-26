import moxios from 'moxios';
import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { toast } from 'react-toastify';
import { signupAction, signupError } from '../actions/signup.action';
import { SIGNUP_SUCCESS, SIGNUP_ERROR } from '../action-types/index';
import signupReducer from '../reducers/signupReducer';

jest.mock('axios');

describe('Signup Actions', () => {
  const userCredentials = {
    firstName: 'Abu',
    lastName: 'Isaac',
    email: 'someuser@gmail.com',
    password: 'randompassword'
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

  it('Should Trigger the SIGN_UP_USER dispatch function', async () => {
    jest.useFakeTimers();
    const mockData = {
      status: 201,
      data: {
        data: {
          token: 'eyJhbGlsIIDrYp9urUBU7UBvM9LUBn_Vachtw',
          id: 1,
          firstname: 'Ade',
          lastname: 'Bade',
          email: 'adebae@gmail.com',
          type: 'staff'
        }
      }
    };

    axios.post.mockResolvedValueOnce(mockData);

    const expectedActions = [{ type: 'SIGNUP_SUCCESS', payload: mockData }];
    const historyObject = {
      push: jest.fn()
    };

    store.dispatch(signupAction(userCredentials, historyObject)).then(() => {
      jest.runOnlyPendingTimers();
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should Trigger the SIGNUP_ERROR dispatch function', async () => {
    const mockData = {
      response: {
        data: {
          status: 409,
          error: 'This email address is already taken.'
        }
      }
    };

    axios.post.mockRejectedValueOnce(mockData);

    const historyObject = {
      push: jest.fn()
    };
    const expectedActions = [
      { type: 'SIGNUP_ERROR', payload: mockData.response.data.error }
    ];
    store.dispatch(signupAction(userCredentials, historyObject)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should return a toast on network error', async () => {
    const mockData = {
      message: 'Network Error'
    };

    const spy = jest.spyOn(toast, 'error');

    axios.post.mockRejectedValueOnce(mockData);

    store.dispatch(signupAction(userCredentials, null)).then(() => {
      expect(spy).toHaveBeenCalledWith('An error occured. Please try Again');
    });
  });
});

describe('Signup Reducer', () => {
  it('Should return a new state if it recieves a signup success action type', () => {
    const user = {
      id: 97,
      firstname: 'Lola',
      lastname: 'Lara',
      email: 'lara@mail.com',
      type: 'savings',
      token: 'sometoken'
    };
    const newState = signupReducer(undefined, {
      type: SIGNUP_SUCCESS,
      payload: user
    });
    expect(newState).toEqual({
      user
    });
  });

  it('Should return a new state if it recieves signup error action type', () => {
    const message = 'invalid username/password';
    const newState = signupReducer(undefined, {
      type: SIGNUP_ERROR,
      payload: message
    });
    expect(newState).toEqual({
      error: message
    });
  });
});
