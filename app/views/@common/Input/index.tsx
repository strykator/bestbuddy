import React, { useState } from 'react'
import { View } from 'react-native'
import { Input as CoreInput } from '@components'
import Button from '../Button'
import styles, { DEFAULT_INPUT_WIDTH } from './styles'
import { buttonType } from '../Button/constants'
import { IInput } from './types'

const Input: React.FC<IInput> = ({
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
  clearTextOnFocus,
  toggleSecureTextEntry
}) => {
  const [enabledSecureText, setEnabledSecureText] = useState(secureTextEntry)

  const renderShowBtn = () => {
    const text = enabledSecureText ? 'Show' : 'Hide'
    const shouldShowBtn = secureTextEntry && toggleSecureTextEntry
    return shouldShowBtn ? (
      <View style={styles.showContainer}>
        <Button
          type={buttonType.TEXT}
          text={text}
          width={50}
          onPress={() => setEnabledSecureText(!enabledSecureText)}
        />
      </View>
    ) : null
  }

  return (
    <View>
      <CoreInput
        width={width}
        height={height}
        type={type}
        label={label}
        placeholder={placeholder}
        onSubmit={onSubmit}
        onFocus={onFocus}
        returnKeyType={returnKeyType}
        secureTextEntry={enabledSecureText}
        disabled={disabled}
        maxLength={maxLength}
        clearTextOnFocus={clearTextOnFocus}
      />
      {renderShowBtn()}
    </View>
  )
}

Input.defaultProps = {
  width: DEFAULT_INPUT_WIDTH,
  label: ''
}

export default Input
