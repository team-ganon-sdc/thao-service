import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Info from '../client/src/components/Info.jsx';
import Rating from '../client/src/components/Rating.jsx';
import AdditionalInfo from '../client/src/components/AdditionalInfo.jsx';
import App from '../client/src/index.jsx'

describe('Client/React Tests', () => {
  test('check to see if info renders', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  })
})