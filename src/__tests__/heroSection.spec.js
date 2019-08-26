import React from 'react';
import { shallow } from 'enzyme';
import HeroSection from '../components/home/HeroSection';

const wrapper = shallow(<HeroSection />);

describe('<HeroSection/> rendering', () => {
  it('should render HeroSection without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
