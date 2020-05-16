import React from 'react'
import { Button as CoreButton } from '@components'
import { color } from '@styles'
import { outlinedType } from '../constants'
import { IOutlinedButton } from '../types'

const OutlinedButton: React.FC<IOutlinedButton> = ({
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

export default OutlinedButton
