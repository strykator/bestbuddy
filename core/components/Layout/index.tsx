import React from 'react'
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ILayout } from './types'
import styles from './styles'

const Layout: React.FC<ILayout> = ({ children, containerStyle }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView contentContainerStyle={styles.keyboardContent}>
          <View style={[styles.contentContainer, containerStyle]}>
            {children}
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default Layout
