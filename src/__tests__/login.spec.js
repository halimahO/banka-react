import axios from 'axios';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { loginAction } from '../actions/login.action';
import { LOGIN_SUCCESS, LOGIN_ERROR } from '../action-types/index';
import { SET_CURRENT_USER } from '../action-types/index';
import { toast } from 'react-toastify';
import loginReducer from '../reducers/loginReducer';
import { LoginPage, mapDispatchToProps } from '../pages/LoginPage';

jest.mock('axios');

describe('Login component Tests', () => {
  const props = {
    loginAction: jest.fn(),
    history: {}
  };

  it('renders the Login component correctly', () => {
    const wrapper = shallow(<LoginPage {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should simulate an onchange event on form input', () => {
    const event = {
      preventDefault() {},
      target: { name: 'leemar', value: 'leemar@mail.com' }
    };
    const component = mount(
      <BrowserRouter>
        <LoginPage {...props} />
      </BrowserRouter>
    );

    const inputTag = component.find('input').at(0);
    inputTag.simulate('change', event);
  });

  it('should render component successfully and check form interactions', () => {
    const component = mount(
      <BrowserRouter>
        <LoginPage {...props} />
      </BrowserRouter>
    );
    component.find('form').simulate('submit');
  });

  it('should dispatch login request action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).loginAction();
  });
});

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
    jest.useFakeTimers();
    const mockData = {
      status: 200,
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

    const expectedActions = [
      { payload: mockData.data.data, type: LOGIN_SUCCESS },
      { payload: mockData.data.data, type: SET_CURRENT_USER }
    ];
    const historyObject = {
      push: jest.fn()
    };

    store.dispatch(loginAction(userCredentials, historyObject)).then(() => {
      jest.runOnlyPendingTimers();
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should Trigger the LOGIN_ERROR dispatch function', async () => {
    const mockData = {
      response: {
        data: {
          status: 401,
          error: 'Invalid username/password'
        }
      }
    };

    axios.post.mockRejectedValueOnce(mockData);

    const historyObject = {
      push: jest.fn()
    };

    const expectedActions = [
      { type: LOGIN_ERROR, payload: mockData.response.data.error }
    ];
    store.dispatch(loginAction(userCredentials, historyObject)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should return a toast on network error', async () => {
    const mockData = {
      message: 'Network Error'
    };

    const spy = jest.spyOn(toast, 'error');

    axios.post.mockRejectedValueOnce(mockData);

    store.dispatch(loginAction(userCredentials, null)).then(() => {
      expect(spy).toHaveBeenCalledWith('An error occured. Please try Again');
    });
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
