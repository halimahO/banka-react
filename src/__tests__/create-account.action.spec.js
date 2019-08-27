import axios from 'axios';
import thunk from 'redux-thunk';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { toast } from 'react-toastify';
import { CreateAccountPage, mapDispatchToProps } from '../pages/CreateAccount';
import { createAccountAction } from '../actions/create-account.action';
import {
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_ERROR
} from '../action-types/index';
import createAccountReducer from '../reducers/createAccountReducer';

jest.mock('axios');

describe('Create Account Page component Tests', () => {
  const props = {
    createAccountAction: jest.fn(),
    history: {},
    firstname: 'name',
    lastname: 'lastname'
  };

  it('renders the CreateAccount component correctly', () => {
    const wrapper = shallow(<CreateAccountPage {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should simulate an onchange event on form input', () => {
    const event = {
      preventDefault() {},
      target: { name: 'leemar', value: 'leemar@mail.com' }
    };
    const component = mount(
      <BrowserRouter>
        <CreateAccountPage {...props} />
      </BrowserRouter>
    );

    const inputTag = component.find('.selectChange').at(0);
    inputTag.simulate('change', event);
  });

  it('should render component successfully and check form interactions', () => {
    const component = mount(
      <BrowserRouter>
        <CreateAccountPage {...props} />
      </BrowserRouter>
    );
    component.find('form').simulate('submit');
  });

  it('should dispatch createAccountAction request action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).createAccountAction();
  });
});
// describe('Create Account Actions', () => {
//   const type = {
//     type: 'savings'
//   };
//   const middleware = [thunk];
//   const mockStore = configureMockStore(middleware);
//   let store;
//   beforeEach(() => {
//     store = mockStore({});
//     jest.resetAllMocks();
//   });
//   afterEach(() => {
//     store.clearActions();
//   });

//   it('Should Trigger the CREATE_ACCOUNT dispatch function', async () => {
//     const mockData = {
//       status: 201,
//       data: {
//         data: {
//           accountNumber: 2314963840,
//           firstName: 'Alde',
//           lastName: 'Sode',
//           email: 'adeubade@mail.com',
//           type: 'savings',
//           openingBalance: 0
//         }
//       }
//     };

//     axios.post.mockResolvedValueOnce(mockData);

//     const expectedActions = [
//       { type: 'CREATE_ACCOUNT_SUCCESS', payload: mockData }
//     ];

//     store.dispatch(createAccountAction(type)).then(() => {
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });

//   it('Should Trigger the CREATE_ACCOUNT_ERROR dispatch function', async () => {
//     const mockData = {
//       response: {
//         data: {
//           status: 400,
//           error: 'An error occured'
//         }
//       }
//     };

//     axios.post.mockRejectedValueOnce(mockData);

//     const expectedActions = [
//       { type: CREATE_ACCOUNT_ERROR, payload: mockData.response.data.error }
//     ];
//     store.dispatch(createAccountAction(type)).then(() => {
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });

//   it('Should return a toast on network error', async () => {
//     const mockData = {
//       message: 'Network Error'
//     };

//     const spy = jest.spyOn(toast, 'error');

//     axios.post.mockRejectedValueOnce(mockData);

//     store.dispatch(createAccountAction(type)).then(() => {
//       expect(spy).toHaveBeenCalledWith('An error occured. Please try Again');
//     });
//   });
// });

// describe('Create Account Reducer', () => {
//   it('Should return a new state if it recieves a create account success action type', () => {
//     const account = {
//       accountNumber: 2579447706,
//       firstName: 'Ade',
//       lastName: 'Bade',
//       email: 'adebade@gmail.com',
//       type: 'current',
//       openingBalance: 0
//     };
//     const newState = createAccountReducer(undefined, {
//       type: CREATE_ACCOUNT_SUCCESS,
//       payload: account
//     });
//     expect(newState).toEqual({
//       account
//     });
//   });

//   it('Should return a new state if it recieves create account action type', () => {
//     const message = 'invalid account number/ amount';
//     const newState = createAccountReducer(undefined, {
//       type: CREATE_ACCOUNT_ERROR,
//       payload: message
//     });
//     expect(newState).toEqual({
//       error: message
//     });
//   });
// });
