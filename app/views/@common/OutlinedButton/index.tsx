import React from 'react'
import { Button as CoreButton } from '@components'
import PropTypes from 'prop-types'
import { color } from '@styles'
import { buttonTypes } from '@constants'

const propTypes = {
  type: PropTypes.string,
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

const OutlinedButton = ({ text, type, half, disabled, onPress }) => {
  let borderColor
  let textColor

  switch (type) {
    case buttonTypes.SECONDARY:
      borderColor = color.accent
      textColor = color.primary
      break
    case buttonTypes.PRIMARY:
    default:
      borderColor = textColor = color.primary
      break
  }

  return (
    <CoreButton
      onPress={onPress}
      half={half}
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
