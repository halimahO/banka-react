import axios from 'axios';
import React from 'react';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { toast } from 'react-toastify';
import { signupAction } from '../actions/signup.action';
import { SIGNUP_SUCCESS, SIGNUP_ERROR } from '../action-types/index';
import signupReducer from '../reducers/signupReducer';
import { Register, mapDispatchToProps } from '../pages/Register';

jest.mock('axios');

describe('Signup component Tests', () => {
  const props = {
    signupAction: jest.fn(),
    history: {}
  };

  it('renders the Login component correctly', () => {
    const wrapper = shallow(<Register {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should simulate an onchange event on form input', () => {
    const event = {
      preventDefault() {},
      target: { name: 'leemar', value: 'leemar@mail.com' }
    };
    const component = mount(
      <BrowserRouter>
        <Register {...props} />
      </BrowserRouter>
    );

    const inputTag = component.find('input').at(0);
    inputTag.simulate('change', event);
  });

  it('should render component successfully and check form interactions', () => {
    const component = mount(
      <BrowserRouter>
        <Register {...props} />
      </BrowserRouter>
    );
    component.find('form').simulate('submit');
  });

  it('should dispatch signup request action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).signupAction();
  });
});

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

    const expectedActions = [
      { type: 'SIGNUP_SUCCESS', payload: mockData.data.data },
      { type: 'SET_CURRENT_USER', payload: mockData.data.data }
    ];
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
