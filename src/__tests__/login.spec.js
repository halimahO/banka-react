import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { loginAction, loginError } from '../actions/login.action';
import { LOGIN_SUCCESS, LOGIN_ERROR } from '../action-types/index';
import loginReducer from '../reducers/loginReducer';

describe('Login Actions', () => {
  const userCredentials = {
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

  it('Should Trigger the LOG_IN_USER dispatch function', async () => {
    const mockData = {
      status: 200,
      data: {
        token: 'eyJhbGlsIIDrYp9urUBU7UBvM9LUBn_Vachtw',
        id: 1,
        firstname: 'Ade',
        lastname: 'Bade',
        email: 'adebae@gmail.com',
        type: 'staff'
      }
    };

    moxios.stubRequest(
      'https://my-banka-app.herokuapp.com/api/v1/auth/signin',
      mockData
    );

    const expectedActions = [{ type: LOGIN_SUCCESS, payload: mockData.data }];
    const historyObject = {
      push: jest.fn()
    };

    store.dispatch(loginAction(userCredentials, historyObject)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should Trigger the LOGIN_ERROR dispatch function', async () => {
    const mockData = {
      status: 401,
      error: 'Invalid username/password'
    };
    moxios.stubRequest(
      'https://my-banka-app.herokuapp.com/api/v1/auth/signin',
      {
        mockData
      }
    );

    const expectedActions = [{ type: LOGIN_ERROR, payload: mockData.error }];
    const { error } = mockData;
    await store.dispatch(loginError(error));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('Login Reducer', () => {
  it('Should return a new state if it recieves a login success action type', () => {
    const user = {
      id: 97,
      firstname: 'Lola',
      lastname: 'Lara',
      email: 'lara@mail.com',
      type: 'savings',
      token: 'sometoken'
    };
    const newState = loginReducer(undefined, {
      type: LOGIN_SUCCESS,
      payload: user
    });
    expect(newState).toEqual({
      user
    });
  });

  it('Should return a new state if it recieves login error action type', () => {
    const message = 'invalid username/password';
    const newState = loginReducer(undefined, {
      type: LOGIN_ERROR,
      payload: message
    });
    expect(newState).toEqual({
      error: message
    });
  });
});
