import React from 'react'
import { View } from 'react-native'
import SolidButton from '@common/SolidButton'
import styles from './styles'

export default function() {
  return (
    <View style={styles.container}>
      <SolidButton text="CLICK ME" />
    </View>
  )
}
