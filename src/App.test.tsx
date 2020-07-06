import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('component: App', () => {
  it('renders', () => {
    const component = shallow(<App />);
    expect(component.length).toEqual(1);
  });
});
