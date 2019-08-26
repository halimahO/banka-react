import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
  createAccountAction,
  createAccountError
} from '../actions/create-account.action';
import {
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_ERROR
} from '../action-types/index';
import createAccountReducer from '../reducers/createAccountReducer';

describe('Create Account Actions', () => {
  const type = {
    type: 'savings'
  };
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  let store;
  beforeEach(() => {
    store = mockStore({});
    // jest.resetAllMocks();
  });
  // afterEach(() => {
  //   store.clearActions();
  // });

  it('Should Trigger the CREATE_ACCOUNT dispatch function', async () => {
    const mockData = {
      status: 201,
      data: {
        accountNumber: 2314963840,
        firstName: 'Alde',
        lastName: 'Sode',
        email: 'adeubade@mail.com',
        type: 'savings',
        openingBalance: 0
      }
    };

    moxios.stubRequest('https://my-banka-app.herokuapp.com/api/v1/accounts', {
      status: 201,
      response: mockData
    });

    const expectedActions = [
      { type: 'CREATE_ACCOUNT_SUCCESS', payload: mockData }
    ];
    store.dispatch(createAccountAction(type));
    console.log(666, store.getActions());
    expect(store.getActions()).toEqual(expectedActions);

    // store.dispatch(createAccountAction(type)).then(() => {
    //   console.log(666, store.getActions());
    //   expect(store.getActions()).toEqual(expectedActions);
    // });
  });

  // it('Should Trigger the CREATE_ACCOUNT dispatch function', async () => {
  //   const mockData = {
  //     status: 201,
  //     data: {
  //       accountNumber: 2314963840,
  //       firstName: 'Alde',
  //       lastName: 'Sode',
  //       email: 'adeubade@mail.com',
  //       type: 'savings',
  //       openingBalance: 0
  //     }
  //   };

  //   moxios.stubRequest(
  //     'https://my-banka-app.herokuapp.com/api/v1/accounts',
  //     mockData,
  //     {
  //       headers: { authorization: `Bearer ytyttg` }
  //     }
  //   );

  //   const expectedActions = [
  //     { type: 'CREATE_ACCOUNT_SUCCESS', payload: mockData }
  //   ];

  // store.dispatch(createAccountAction(type)).then(() => {
  //   expect(store.getActions()).toEqual(expectedActions);
  // });
  // });

  it('Should Trigger the CREATE_ACCOUNT_ERROR dispatch function', async () => {
    const mockData = {
      data: {
        error: {
          message: 'error occured'
        }
      }
    };

    moxios.stubRequest('https://my-banka-app.herokuapp.com/api/v1/accounts', {
      mockData
    });

    const expectedActions = [
      { type: CREATE_ACCOUNT_ERROR, payload: mockData.data.error.message }
    ];
    const { message } = mockData.data.error;
    await store.dispatch(createAccountError(message));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('Create Account Reducer', () => {
  it('Should return a new state if it recieves a create account success action type', () => {
    const account = {
      accountNumber: 2579447706,
      firstName: 'Ade',
      lastName: 'Bade',
      email: 'adebade@gmail.com',
      type: 'current',
      openingBalance: 0
    };
    const newState = createAccountReducer(undefined, {
      type: CREATE_ACCOUNT_SUCCESS,
      payload: account
    });
    expect(newState).toEqual({
      account
    });
  });

  it('Should return a new state if it recieves create account action type', () => {
    const message = 'invalid account number/ amount';
    const newState = createAccountReducer(undefined, {
      type: CREATE_ACCOUNT_ERROR,
      payload: message
    });
    expect(newState).toEqual({
      error: message
    });
  });
});
