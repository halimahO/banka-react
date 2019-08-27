import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { ClientDashboard, mapDispatchToProps } from '../pages/ClientDashboard';

describe('Client Dashboard component Tests', () => {
  const props = {
    UserTransaction: jest.fn(),
    debit: jest.fn(),
    credit: jest.fn(),
    auth: {},
    amount: 1000
  };

  it('renders the ClientDashboard component correctly', () => {
    const wrapper = shallow(<ClientDashboard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should simulate handle debit', () => {
    const event = {
      preventDefault: jest.fn()
    };

    const component = mount(
      <BrowserRouter>
        <ClientDashboard.WrappedComponent {...props} />
      </BrowserRouter>
    );
    component.find('#handleDebit').simulate('click', event);
    expect(props.amount).toHaveBeenCalled();
  });

  it('should simulate an onchange event on form input', () => {
    const event = {
      preventDefault() {},
      target: { name: 'accountNo', value: 1234567890 }
    };
    const component = mount(
      <BrowserRouter>
        <ClientDashboard {...props} />
      </BrowserRouter>
    );

    const inputTag = component.find('.selectChange').at(0);
    inputTag.simulate('change', event);
  });

  it('should dispatch UserTransaction request action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).UserTransaction();
  });
  it('should dispatch debit request action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).debit();
  });
  it('should dispatch credit request action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).credit();
  });
});
