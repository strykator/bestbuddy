import React from 'react'
import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { ILayout } from './types'
import styles from './styles'

const Layout: React.FC<ILayout> = ({ children, containerStyle }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={[styles.container, containerStyle]}>
        {children}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default Layout
