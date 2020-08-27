import React from 'react'
import App from '../App.js'
import { shallow } from 'enzyme'

describe('App', () => {
  it("renders without crashing", () => {
    const wrapper = shallow( <App /> );
  
    expect(wrapper.find(App)).toHaveLength(1)
  });
})


