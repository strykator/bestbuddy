import React from 'react'
import { buttonType } from '@core-constants'
import OutlinedButton from './OutlinedButton'
import SolidButton from './SolidButton'
import TextButton from './TextButton'
import { IButton } from './types'

const Button: React.FC<IButton> = ({
  type,
  subType,
  text,
  onPress,
  halfSize,
  fullSize,
  width
}) => {
  const renderOutlinedBtn = () => (
    <OutlinedButton
      text={text}
      type={subType}
      onPress={onPress}
      halfSize={halfSize}
      fullSize={fullSize}
      width={width}
    />
  )

  const renderSolidBtn = () => (
    <SolidButton
      text={text}
      onPress={onPress}
      halfSize={halfSize}
      fullSize={fullSize}
      width={width}
    />
  )

  const renderTextBtn = () => (
    <TextButton text={text} onPress={onPress} width={width} />
  )

  switch (type) {
    case buttonType.OUTLINED:
      return renderOutlinedBtn()
    case buttonType.TEXT:
      return renderTextBtn()
    case buttonType.SOLID:
    default:
      return renderSolidBtn()
  }
}

export default Button
