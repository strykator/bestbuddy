import { StyleSheet } from 'react-native'
import { dimension } from '@core-styles'

const INPUT_CONTAINER_HEIGHT = dimension.fullHeight * 0.3

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: INPUT_CONTAINER_HEIGHT
  }
})
