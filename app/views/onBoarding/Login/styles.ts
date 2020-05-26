import { StyleSheet } from 'react-native'
import { dimension } from '@core-styles'

const INPUT_CONTAINER_HEIGHT = dimension.fullHeight * 0.2
const CONTENT_CONTAINER_HEIGHT = dimension.fullHeight * 0.32

const SPACE_HEIGHT = dimension.fullHeight * 0.01

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: CONTENT_CONTAINER_HEIGHT
  },
  inputContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: INPUT_CONTAINER_HEIGHT
  },
  space: {
    height: SPACE_HEIGHT
  }
})
