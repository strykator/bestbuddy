import React from 'react'
import PropTypes from 'prop-types'
import { buttonType, outlinedType } from './types'
import OutlinedButton from './OutlinedButton'
import SolidButton from './SolidButton'
import TextButton from './TextButton'

const propTypes = {
  type: PropTypes.string.isRequired,
  subType: PropTypes.string,
  halfSize: PropTypes.bool,
  fullSize: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  text: PropTypes.string,
  onPress: PropTypes.func
}

const Button = ({
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

Button.propTypes = propTypes

export { buttonType, outlinedType }

export default Button
