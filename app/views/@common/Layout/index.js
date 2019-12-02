import React from 'react'
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import PropTypes from 'prop-types'
import styles from './styles'

const propTypes = {
  children: PropTypes.object,
  footer: PropTypes.object
}

const Layout = ({ children, footer }) => {
  return (
    <KeyboardAwareScrollView
      keyboardDismissMode="interactive"
      keyboardShouldPersistTaps="always">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.container}>
          <View style={styles.contentContainer}>{children}</View>
          <View style={styles.footerContainer}>{footer}</View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}

Layout.propTypes = propTypes

export default Layout
