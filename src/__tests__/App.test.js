import React from 'react'
import App from '../App.js'
import { shallow } from 'enzyme'
import ErrorCodes from '../ErrorCodes'

describe('User can view error codes', () => {
  it('clicking error codes button shows the ErrorCode component', () => {
    const wrapper = shallow(<App />)
    const button = wrapper.find('#error-codes')
    button.simulate('click')

    expect(wrapper.find(ErrorCodes)).toHaveLength(1)
  })

  it('user does not click error codes button, component does not show', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find(ErrorCodes)).toHaveLength(0)
  })
})

