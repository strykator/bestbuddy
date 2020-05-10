import React from 'react'
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import PropTypes from 'prop-types'
import styles from './styles'

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  containerStyle: PropTypes.object
}

const Layout = ({ children, containerStyle }) => {
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

Layout.propTypes = propTypes

export default Layout
