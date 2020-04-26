// import EStyleSheet from 'react-native-extended-stylesheet'
import { StyleSheet } from 'react-native'
import { dimension } from '../../../styles'

export const DEFAULT_INPUT_WIDTH = dimension.fullWidth * 0.87

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
