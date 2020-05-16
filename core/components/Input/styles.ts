// import EStyleSheet from 'react-native-extended-stylesheet'
import { StyleSheet } from 'react-native'
import { dimension } from '@core-styles'

export const SAFE_AREA_VIEW_PADDING_TOP = dimension.fullHeight * 0.05 // SafeAreaView

export const KEYBOARD_OFFSET = dimension.fullHeight / 2.6

export const INPUT_WIDTH = dimension.fullWidth
export const INPUT_HEIGHT = dimension.fullHeight * 0.07

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
