import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { IKeyboardAware } from './types'
import styles from './styles'

const KeyboardAware: React.FC<IKeyboardAware> = ({
  children,
  extraHeight,
  extraScrollHeight,
  scrollHeight
}) => {
  let keyboardRef

  const scrollToPosition = () =>
    scrollHeight &&
    keyboardRef &&
    keyboardRef.props.scrollToPosition(0, scrollHeight)

  return (
    <KeyboardAwareScrollView
      innerRef={ref => {
        keyboardRef = ref
      }}
      extraScrollHeight={extraScrollHeight}
      extraHeight={extraHeight}
      onKeyboardWillShow={scrollToPosition}
      contentContainerStyle={styles.keyboardContent}>
      {children}
    </KeyboardAwareScrollView>
  )
}

export default KeyboardAware
