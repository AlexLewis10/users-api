import React from 'react'
import App from '../components/App.js'
import { shallow } from 'enzyme'
import ErrorCodes from '../components/ErrorCodes'
import Requests from '../components/Requests'
import './App.css'

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

  it('can return to requests by clicking the requests button', () => {
    const wrapper = shallow(<App />)
    const errorCodesButton = wrapper.find('#error-codes')
    errorCodesButton.simulate('click')
    const requestsButton = wrapper.find('#requests')
    requestsButton.simulate('click')

    expect(wrapper.find(Requests)).toHaveLength(1)
    expect(wrapper.find(ErrorCodes)).toHaveLength(0)
  })
})

