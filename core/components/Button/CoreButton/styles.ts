import { StyleSheet } from 'react-native'
import { dimension, font } from '@core-styles'

const BUTTON_WIDTH = dimension.fullWidth * 0.8
const BUTTON_HEIGHT = dimension.fullWidth * 0.12

const BUTTON_HALF_WIDTH = BUTTON_WIDTH / 2
const BUTTON_HALF_HEIGHT = BUTTON_HEIGHT * 0.8

export const buttonSize = {
  full: {
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT
  },
  half: {
    width: BUTTON_HALF_WIDTH,
    height: BUTTON_HALF_HEIGHT
  }
}

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2.5,
    borderRadius: 10
  },
  disabledText: {
    color: 'white'
  },
  text: {
    fontSize: font.size.m
  }
})
