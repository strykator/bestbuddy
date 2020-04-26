import React from 'react'
import { Input as CoreInput } from '@components'
import PropTypes from 'prop-types'
import { DEFAULT_INPUT_WIDTH } from './styles'

const propTypes = {
  children: PropTypes.object
}

const Input = ({
  width,
  height,
  type,
  label,
  placeholder,
  onSubmit,
  onFocus,
  returnKeyType,
  secureTextEntry,
  disabled,
  maxLength,
  clearTextOnFocus
}) => {
  return (
    <CoreInput
      width={width}
      height={height}
      type={type}
      label={label}
      placeholder={placeholder}
      onSubmit={onSubmit}
      onFocus={onFocus}
      returnKeyType={returnKeyType}
      secureTextEntry={secureTextEntry}
      disabled={disabled}
      maxLength={maxLength}
      clearTextOnFocus={clearTextOnFocus}
    />
  )
}

Input.propTypes = propTypes

Input.defaultProps = {
  width: DEFAULT_INPUT_WIDTH,
  label: null
}

export default Input
