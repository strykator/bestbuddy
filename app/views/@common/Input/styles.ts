// import EStyleSheet from 'react-native-extended-stylesheet'
import { StyleSheet } from 'react-native'
import { dimension } from '../../../styles'

export const DEFAULT_INPUT_WIDTH = dimension.fullWidth * 0.87

export default StyleSheet.create({
  container: {
    flex: 1
  },
  showContainer: {
    height: 50,
    width: 55,
    alignSelf: 'flex-end',
    paddingTop: '30%',
    position: 'absolute'
  }
})
