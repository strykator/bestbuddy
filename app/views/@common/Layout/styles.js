// import EStyleSheet from 'react-native-extended-stylesheet'
import { StyleSheet } from 'react-native'
import { dimensions } from '../../../styles/index'

export const SAFE_AREA_VIEW_PADDING_TOP = dimensions.fullHeight * 0.05 // SafeAreaView

export const KEYBOARD_OFFSET = dimensions.fullHeight / 2.6

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  contentContainer: {
    flex: 7,
    backgroundColor: 'green',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 300
  },
  footerContainer: {
    flex: 1,
    backgroundColor: 'red'
  },
  keyboardAvoidViewContainer: {
    flex: 1,
    backgroundColor: 'blue'
  }
})
