import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter as Router, BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configMockStore from 'redux-mock-store';
import NavigationBar from '../components/home/NavigationBar';
import NavigationBarDashboard from '../components/home/NavigationBarDashboard';
import NavigationBarLogin from '../components/home/NavigationBarLogin';

const initialState = {
  isAuthenticated: false,
  user: null
};

const mockStore = configMockStore([thunk]);
const store = mockStore(initialState);

const props = {
  logout: jest.fn(),
  auth: {
    isAuthenticated: false,
    user: {
      firstname: 'name',
      lastname: 'name',
      type: 'client',
      token: 'token'
    }
  },
  history: {
    push: jest.fn()
  }
};

const wrapper = shallow(
  <Provider store={store}>
    <Router>
      <NavigationBar {...props} />
    </Router>
  </Provider>
);

describe('<NavigationBar/> rendering', () => {
  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should simulate logout', () => {
    props.auth.isAuthenticated = true;
    const event = {
      preventDefault: jest.fn()
    };

    const component = mount(
      <BrowserRouter>
        <NavigationBar.WrappedComponent {...props} />
      </BrowserRouter>
    );
    component.find('#logout').simulate('click', event);
    expect(props.logout).toHaveBeenCalled();
    expect(props.history.push).toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();
    props.auth.isAuthenticated = false;
  });

  it('should simulate sidebar toggle', () => {
    const component = mount(
      <BrowserRouter>
        <NavigationBar.WrappedComponent {...props} />
      </BrowserRouter>
    );
    const instance = component.find('NavigationBar').instance();
    const spy = jest.spyOn(instance, 'toggleSidebar');
    instance.forceUpdate();
    component.find('#menu').simulate('click');

    expect(spy).toHaveBeenCalled();
  });
});

const wrapperDashboard = shallow(
  <Provider store={store}>
    <Router>
      <NavigationBarDashboard {...props} />
    </Router>
  </Provider>
);

describe('<NavigationBarDashboard/> rendering', () => {
  it('should render without crashing', () => {
    expect(wrapperDashboard).toMatchSnapshot();
  });

  it('should simulate sidebar toggle', () => {
    const component = mount(
      <BrowserRouter>
        <NavigationBarDashboard.WrappedComponent {...props} />
      </BrowserRouter>
    );
    const instance = component.find('NavigationBarDashboard').instance();
    const spy = jest.spyOn(instance, 'toggleSidebar');
    instance.forceUpdate();
    component.find('.menuToggle').simulate('click');

    expect(spy).toHaveBeenCalled();
  });
});

const wrapperLogin = shallow(
  <Provider store={store}>
    <Router>
      <NavigationBarLogin {...props} />
    </Router>
  </Provider>
);

describe('<NavigationBarLogin/> rendering', () => {
  it('should render without crashing', () => {
    expect(wrapperLogin).toMatchSnapshot();
  });

  it('should simulate sidebar toggle', () => {
    const component = mount(
      <BrowserRouter>
        <NavigationBarLogin.WrappedComponent {...props} />
      </BrowserRouter>
    );
    const instance = component.find('NavigationBarLogin').instance();
    const spy = jest.spyOn(instance, 'toggleSidebar');
    instance.forceUpdate();
    component.find('.menuSidebar').simulate('click');

    expect(spy).toHaveBeenCalled();
  });
});
