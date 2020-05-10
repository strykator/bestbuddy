import React from 'react'
import { View } from 'react-native'
import Button, { buttonType, outlinedType } from '@common/Button'
import { Space } from '../utils'
import styles from './styles'

export default function() {
  return (
    <View style={styles.container}>
      <Button
        type={buttonType.OUTLINED}
        subType={outlinedType.PRIMARY}
        text="Outlined Primary Btn"
      />
      <Space />
      <Button
        type={buttonType.OUTLINED}
        subType={outlinedType.SECONDARY}
        text="Outlined Secondary Btn"
      />
      <Space />
      <Button type={buttonType.SOLID} text="Solid Btn" />
      <Space />
      <Button type={buttonType.TEXT} text="Text Btn" />
      <Space />
    </View>
  )
}
