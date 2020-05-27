import React from 'react'
import CoreButton from '../CoreButton'
import { color } from '@core-styles'
import { ISolidButton } from '../types'

const SolidButton: React.FC<ISolidButton> = ({
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

export default SolidButton
