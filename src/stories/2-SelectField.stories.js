import React from 'react'
import { SelectField } from '..'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

export default {
  title: 'SelectField',
  component: SelectField,
  decorators: [withKnobs]
}

export const Default = () => (
  <SelectField
    name={text('name', 'select-field')}
    isFullWidth={boolean('isFullWidth', false)}
    value={text('value', 'value 1')}
    handleChange={action('handleChange')}
    handleBlur={action('handleBlur')}
    options={[
      { name: 'option 1', value: 'value 1' },
      { name: 'option 2', value: 'value 2' }
    ]}
  />
)

export const DefaultWithErrors = () => (
  <SelectField
    name={text('name', 'select-field')}
    isFullWidth={boolean('isFullWidth', false)}
    value={text('value', 'value 2')}
    handleChange={action('handleChange')}
    error={{
      isError: true,
      hasInteracted: true,
      message: 'Invalid value'
    }}
    handleBlur={action('handleBlur')}
    options={[
      { name: 'option 1', value: 'value 1' },
      { name: 'option 2', value: 'value 2' }
    ]}
  />
)