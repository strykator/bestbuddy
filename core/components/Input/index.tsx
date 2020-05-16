import React, { useRef } from 'react'
import { inputType } from '@core-constants'
import {
  TextField,
  FilledTextField,
  OutlinedTextField
} from 'react-native-material-textfield'
import { INPUT_WIDTH, INPUT_HEIGHT } from './styles'
import { IInput } from './types'

const Input: React.FC<IInput> = ({
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
  renderRightAccessory,
  label,
  returnKeyType,
  autoCapitalize,
  autoCorrect,
  width,
  height,
  disabled,
  placeholder
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
    case inputType.TYPE3:
      return renderFilledTextField()
    case inputType.TYPE2:
      return renderOutlinedTextField()
    case inputType.TYPE1:
    default:
      return renderTextField()
  }
}

Input.defaultProps = {
  type: inputType.TYPE1,
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
