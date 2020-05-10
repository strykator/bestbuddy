import React from 'react'
import { Button as CoreButton } from '@components'
import PropTypes from 'prop-types'
import { color } from '@styles'

const propTypes = {
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

const SolidButton = ({
  text,
  halfSize,
  fullSize = true,
  width,
  disabled,
  onPress
}) => {
  const primaryColor = color.primary

  return (
    <CoreButton
      onPress={onPress}
      halfSize={halfSize}
      fullSize={fullSize}
      width={width}
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
