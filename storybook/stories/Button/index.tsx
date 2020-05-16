import React from 'react'
import { View } from 'react-native'
import { Button } from '@common'
import { buttonType, outlinedType } from '@constants'
import { Space } from '../utils'
import styles from './styles'

export default function() {
  const onPress = () => 'any'

  return (
    <View style={styles.container}>
      <Button
        type={buttonType.OUTLINED}
        subType={outlinedType.PRIMARY}
        text="Outlined Primary Btn"
        onPress={onPress}
      />
      <Space />
      <Button
        type={buttonType.OUTLINED}
        subType={outlinedType.SECONDARY}
        text="Outlined Secondary Btn"
        onPress={onPress}
      />
      <Space />
      <Button type={buttonType.SOLID} text="Solid Btn" onPress={onPress} />
      <Space />
      <Button type={buttonType.TEXT} text="Text Btn" onPress={onPress} />
      <Space />
    </View>
  )
}
