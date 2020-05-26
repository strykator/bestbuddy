// import EStyleSheet from 'react-native-extended-stylesheet'
import { StyleSheet } from 'react-native'
import { dimension } from '@core-styles'

export const SAFE_AREA_VIEW_PADDING_TOP = dimension.fullHeight * 0.05 // SafeAreaView

export const KEYBOARD_OFFSET = dimension.fullHeight / 2.6

export default StyleSheet.create({
  container: {
    flex: 1
  }
})
