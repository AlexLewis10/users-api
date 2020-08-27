import React from 'react'
import App from '../App.js'
import { shallow } from 'enzyme'
import ErrorCodes from '../ErrorCodes'
import Requests from '../Requests'

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

  it('clicking ErrorCodes hides main documentation', () => {
    const wrapper = shallow(<App />)
    const button = wrapper.find('#error-codes')
    button.simulate('click')

    expect(wrapper.find(Requests)).toHaveLength(0)
  })

  xit('can return to requests by clicking the requests button', () => {
    const wrapper = shallow(<App />)
    const errorCodesButton = wrapper.find('#error-codes')
    const requestsButton = wrapper.find('#requests')
    errorCodesButton.simulate('click')
    requestsButton.simulate('click')

    expect(wrapper).toIncludeText('Users API')
  })
})

