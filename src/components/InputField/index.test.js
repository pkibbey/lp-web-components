import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import InputField from './'

const mockFunction = jest.fn()

test('renders an input field', () => {
  render(
    <InputField
      name='test1'
      value='test value'
      handleChange={mockFunction}
      handleBlur={mockFunction}
      placeholder='test placeholder'
      shouldFocusOnLoad
    />
  )
  expect(mockFunction).not.toHaveBeenCalled()
})

test('renders an input field with errors', () => {
  render(
    <InputField
      name='test2'
      value='test value'
      handleChange={mockFunction}
      handleBlur={mockFunction}
      placeholder='test placeholder'
      error={{
        isError: true,
        requirements: {
          name: 'errors...',
          data: [
            { name: 'data1', isError: true },
            { name: 'data2', isError: false }
          ]
        }
      }}
    />
  )
  expect(mockFunction).not.toHaveBeenCalled()
})

test('input field blur event is fired', () => {
  const { getByTestId } = render(
    <InputField
      name='test3'
      value='test value'
      handleChange={mockFunction}
      handleBlur={mockFunction}
      placeholder='test placeholder'
    />
  )
  fireEvent.blur(getByTestId('input-field-test3'))
  expect(mockFunction).toHaveBeenCalled()
})

test('input field change event is fired', () => {
  const { getByTestId } = render(
    <InputField
      name='test4'
      value='test value'
      handleChange={mockFunction}
      handleBlur={mockFunction}
      placeholder='test placeholder'
    />
  )
  fireEvent.change(getByTestId('input-field-test4'), {
    target: { value: 'new-value' }
  })
  expect(mockFunction).toHaveBeenCalledTimes(2)
})

test('renders a password field and shows the text when clicking the icon', () => {
  const { getByTestId } = render(
    <InputField
      name='password'
      type='password'
      value='test value'
      handleChange={mockFunction}
      handleBlur={mockFunction}
      placeholder='test placeholder'
    />
  )
  getByTestId('password-icon').click()
  expect(mockFunction).toHaveBeenCalledTimes(2)
})
