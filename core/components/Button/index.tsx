import React from 'react'
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Text
} from 'react-native'
import styles, { buttonSize } from './styles'
import { color } from '@core-styles'
import { iosPlatform } from '@core-styles/setting'
import { IButton } from './types'

const Button: React.FC<IButton> = ({
  onPress,
  text,
  width,
  height,
  halfSize,
  fullSize,
  borderRadius,
  borderColor,
  backgroundColor,
  textColor,
  disabled,
  loading
}) => {
  const borderColorStyle = (borderColor && { borderColor }) || {
    borderColor: 'transparent'
  }
  const borderRadiusStyle = borderRadius && { borderRadius }
  const backgroundColorStyle = backgroundColor && { backgroundColor }
  const heightStyle = height && { height }
  const widthStyle = width && { width }
  const textColorStyle = textColor && { color: textColor }
  const halfSizeStyle = halfSize && buttonSize.half
  const fullSizeStyle = fullSize && buttonSize.full

  const buttonStyle = [
    styles.container,
    borderColorStyle,
    borderRadiusStyle,
    backgroundColorStyle,
    heightStyle,
    widthStyle,
    fullSizeStyle,
    halfSizeStyle,
    disabled && {
      backgroundColor: color.lightDisabledColor,
      borderColor: 'transparent'
    }
  ]

  const textStyle = [
    styles.text,
    textColorStyle,
    disabled && styles.disabledText
  ]

  const ignorePress = () => ''

  const handleOnPress = () => (onPress ? onPress() : ignorePress())

  const renderIOSButton = () => (
    <TouchableOpacity
      style={buttonStyle}
      activeOpacity={0.5}
      disabled={disabled}
      onPress={handleOnPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  )

  const renderAndroidButton = () => (
    <TouchableNativeFeedback disabled={disabled} onPress={handleOnPress}>
      <View style={buttonStyle}>
        <Text style={textStyle}>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  )

  return iosPlatform ? renderIOSButton() : renderAndroidButton()
}

export default Button
