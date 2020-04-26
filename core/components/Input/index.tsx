import React, { useRef } from 'react'
import { inputTypes } from '@constants'
import PropTypes from 'prop-types'
import {
  TextField,
  FilledTextField,
  OutlinedTextField
} from 'react-native-material-textfield'

import { INPUT_WIDTH, INPUT_HEIGHT } from './styles'

const propTypes = {
  type: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  autoEnableReturnKey: PropTypes.bool,
  clearTextOnFocus: PropTypes.bool,
  onFocus: PropTypes.func,
  onChangeText: PropTypes.func,
  onSubmit: PropTypes.func,
  errorText: PropTypes.string,
  underTitle: PropTypes.string,
  maxLength: PropTypes.number,
  characterRestriction: PropTypes.number,
  renderRightAccessory: PropTypes.func,
  label: PropTypes.string,
  returnKeyType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  autoCorrect: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string
}

const Input = ({
  type,
  secureTextEntry,
  autoEnableReturnKey,
  clearTextOnFocus,
  onFocus,
  onChangeText,
  onSubmit,
  errorText,
  underTitle,
  maxLength,
  characterRestriction,
  renderRightAccessory,
  label,
  returnKeyType,
  autoCapitalize,
  autoCorrect,
  width,
  height,
  disabled,
  placeholder,
  handle
}) => {
  const ref = useRef()

  const renderFilledTextField = () => (
    <FilledTextField
      ref={ref}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      enablesReturnKeyAutomatically={autoEnableReturnKey}
      clearTextOnFocus={clearTextOnFocus}
      onFocus={onFocus}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmit}
      returnKeyType={returnKeyType}
      label={label}
      error={errorText}
      title={underTitle}
      maxLength={maxLength}
      renderRightAccessory={renderRightAccessory}
      disabled={disabled}
      containerStyle={{ width, height }}
      inputContainerStyle={{ width, height }}
      placeholder={placeholder}
    />
  )

  const renderOutlinedTextField = () => (
    <OutlinedTextField
      ref={ref}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      enablesReturnKeyAutomatically={autoEnableReturnKey}
      clearTextOnFocus={clearTextOnFocus}
      onFocus={onFocus}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmit}
      returnKeyType={returnKeyType}
      label={label}
      error={errorText}
      title={underTitle}
      maxLength={maxLength}
      renderRightAccessory={renderRightAccessory}
      disabled={disabled}
      containerStyle={{ width, height }}
      inputContainerStyle={{ width, height }}
      placeholder={placeholder}
    />
  )

  const renderTextField = () => (
    <TextField
      ref={ref}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      enablesReturnKeyAutomatically={autoEnableReturnKey}
      clearTextOnFocus={clearTextOnFocus}
      onFocus={onFocus}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmit}
      returnKeyType={returnKeyType}
      label={label}
      error={errorText}
      title={underTitle}
      maxLength={maxLength}
      renderRightAccessory={renderRightAccessory}
      disabled={disabled}
      containerStyle={{ width, height }}
      inputContainerStyle={{ width, height }}
      placeholder={placeholder}
    />
  )

  switch (type) {
    case inputTypes.TYPE3:
      return renderFilledTextField()
    case inputTypes.TYPE2:
      return renderOutlinedTextField()
    case inputTypes.TYPE1:
    default:
      return renderTextField()
  }
}

Input.propTypes = propTypes

Input.defaultProps = {
  type: inputTypes.TYPE1,
  maxLength: 30,
  characterRestriction: 20,
  returnKeyType: 'done',
  autoCapitalize: 'none',
  autoCorrect: false,
  width: INPUT_WIDTH,
  height: INPUT_HEIGHT,
  disabled: false
}

export default Input
