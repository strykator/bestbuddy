import React from 'react'
import { View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { Input } from '@core-components'
import { inputType } from '@core-constants'
import styles from './styles'

export default function() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Input
          type={inputType.TYPE2}
          width={200}
          placeholder="Enter your username"
          label="Username"
          onSubmit={e => Alert.alert(e.nativeEvent.text)}
          returnKeyType="send"
        />
      </View>
    </TouchableWithoutFeedback>
  )
}
