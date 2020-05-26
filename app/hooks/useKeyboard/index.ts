import { useState, useEffect } from 'react'
import { Keyboard } from 'react-native'

const useKeyboard = () => {
  const [height, setHeight] = useState(0)
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', onKeyboardDidShow)
    // Keyboard.addListener('keyboardDidHide', onKeyboardDidHide)
    return () => {
      Keyboard.removeListener('keyboardDidShow', onKeyboardDidShow)
      // Keyboard.removeListener('keyboardDidHide', onKeyboardDidHide)
    }
  }, [])

  const onKeyboardDidShow = ({ endCoordinates }) =>
    setHeight(endCoordinates.height)

  return { height }
}

export default useKeyboard
