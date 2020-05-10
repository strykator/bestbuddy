import React from 'react'
import PropTypes from 'prop-types'
import { Button as CoreButton } from '@components'

const propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

const TextButton = ({ text, onPress, width }) => {
  return <CoreButton text={text} onPress={onPress} width={width} />
}

TextButton.propTypes = propTypes

export default TextButton
