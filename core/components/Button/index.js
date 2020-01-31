import React from 'react'
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Text
} from 'react-native'
import PropTypes from 'prop-types'
import styles, { buttonSize } from './styles'
import { color } from '@styles'
import { iosPlatform } from '@styles/setting'

const propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  half: PropTypes.bool,
  borderRadius: PropTypes.number,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool
}

const Button = ({
  onPress,
  text,
  width,
  height,
  half,
  borderRadius,
  borderColor,
  backgroundColor,
  textColor,
  disabled,
  loading
}) => {
  const borderColorStyle = borderColor && { borderColor }
  const borderRadiusStyle = borderRadius && { borderRadius }
  const backgroundColorStyle = backgroundColor && { backgroundColor }
  const heightStyle = height && { height }
  const widthStyle = width && { width }
  const textColorStyle = textColor && { color: textColor }
  const halfSize = half && buttonSize.half

  const buttonStyle = [
    styles.container,
    borderColorStyle,
    borderRadiusStyle,
    backgroundColorStyle,
    heightStyle,
    widthStyle,
    halfSize,
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

Button.propTypes = propTypes

export default Button
