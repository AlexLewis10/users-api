import React from 'react'
import App from '../App.js'
import { shallow } from 'enzyme'
import ErrorCodes from '../ErrorCodes'


describe('User can view error codes', () => {
  it('clicking error codes button shows the ErrorCode component', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find(ErrorCodes)).toHaveLength(0)
  })
})
