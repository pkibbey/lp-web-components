import React from 'react'
import { Box } from 'rebass'
import { Select } from '@rebass/forms'
import ErrorText from '../ErrorText'
import PropTypes from 'prop-types'

/**
 * Used for selecting a single option from a defined set
 *
 * @visibleName Select Field
 */
const SelectField = ({
  name,
  value,
  isFullWidth,
  handleChange,
  error,
  handleBlur,
  options
}) => {
  const isErrored = error && error.isError

  const getVariant = () => {
    if (isErrored) {
      return 'textInputError'
    }
    return 'textInput'
  }

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          display: isFullWidth ? 'block' : ['block', 'grid'],
          gridTemplateColumns: ['auto', '5fr 4fr'],
          gridTemplateAreas: "'input spacer'",
          '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
            display: isFullWidth ? 'block' : '-ms-grid',
            msGridColumns: '5fr 4fr'
          }
        }}
      >
        <Select
          value={value}
          onChange={(event) =>
            handleChange && handleChange(name, event.target.value)
          }
          onBlur={() => handleBlur && handleBlur(name, { hasInteracted: true })}
          name={name}
          mb={isErrored ? 2 : 4}
          py={0}
          px={3}
          variant={getVariant()}
          sx={{ gridArea: 'input', msGridColumn: '1' }}
        >
          {options.map((option) => (
            <option
              key={option.name}
              value={option.value}
              disabled={option.disabled}
            >
              {option.name}
            </option>
          ))}
        </Select>
        <Box sx={{ gridArea: 'spacer', msGridColumn: '2' }} />
      </Box>
      <ErrorText error={error} mb={3} />
    </Box>
  )
}

SelectField.propTypes = {
  /** An array of options for the select field  */
  options: PropTypes.array,
  /** Select field label for accessibility */
  name: PropTypes.string,
  /** A callback to fire when the select field changes */
  handleChange: PropTypes.func,
  /** A callback to fire when the select field loses focus */
  handleBlur: PropTypes.func,
  /** A value for the select field */
  value: PropTypes.string,
  /** When this is true, the select field will render full width */
  isFullWidth: PropTypes.bool,
  /** An object describing the error in the select field */
  error: PropTypes.shape({
    isError: PropTypes.bool,
    hasInteracted: PropTypes.bool,
    message: PropTypes.string
  })
}

SelectField.defaultProps = {
  name: 'select-field',
  value: '',
  options: [],
  error: {},
  isFullWidth: false
}

export default SelectField
