import React from 'react'
import { Button as CoreButton } from '@components'
import PropTypes from 'prop-types'
import { color } from '@styles'
import { outlinedType } from '../types'

const propTypes = {
  type: PropTypes.string,
  onPress: PropTypes.func,
  text: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.number,
  halfSize: PropTypes.bool,
  fullSize: PropTypes.bool,
  borderRadius: PropTypes.number,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool
}

const OutlinedButton = ({
  text,
  type,
  halfSize,
  fullSize = true,
  width,
  disabled,
  onPress
}) => {
  let borderColor
  let textColor

  switch (type) {
    case outlinedType.SECONDARY:
      borderColor = color.accent
      textColor = color.primary
      break
    case outlinedType.PRIMARY:
    default:
      borderColor = textColor = color.primary
      break
  }

  return (
    <CoreButton
      onPress={onPress}
      halfSize={halfSize}
      fullSize={fullSize}
      width={width}
      disabled={disabled}
      text={text}
      textColor={textColor}
      backgroundColor="transparent"
      borderColor={borderColor}
    />
  )
}

OutlinedButton.propTypes = propTypes

export default OutlinedButton
