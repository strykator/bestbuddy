import React from 'react'
import { Button as CoreButton } from '@components'
import PropTypes from 'prop-types'
import { color } from '@styles'

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

const SolidButton = ({ text, half, disabled, onPress }) => {
  const primaryColor = color.primary

  return (
    <CoreButton
      onPress={onPress}
      half={half}
      disabled={disabled}
      text={text}
      textColor="white"
      backgroundColor={primaryColor}
      borderColor={primaryColor}
    />
  )
}

SolidButton.propTypes = propTypes

export default SolidButton
