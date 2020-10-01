
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../client/src/components/App.jsx';
import Image from '../client/src/components/Image.jsx';


describe('App Component Test Suite', () => {
  it('App component should be defined and contains hasLoaded state', () => {
    expect(App).toBeDefined();
    const wrapper = shallow(<App />);
    expect(wrapper.state().hasLoaded).toBe(false);
  });
