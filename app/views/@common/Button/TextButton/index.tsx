import React from 'react'
import { Button as CoreButton } from '@components'
import { ITextButton } from '../types'

const TextButton: React.FC<ITextButton> = ({ text, onPress, width }) => {
  return <CoreButton text={text} onPress={onPress} width={width} />
}

export default TextButton
