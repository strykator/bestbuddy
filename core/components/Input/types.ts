export interface IInput {
  type?: string
  secureTextEntry?: boolean
  autoEnableReturnKey?: boolean
  clearTextOnFocus?: boolean
  onFocus?(): any
  onChangeText?(): any
  onSubmit?(): any
  errorText?: string
  underTitle?: string
  maxLength?: number
  characterRestriction?: number
  renderRightAccessory?(): any
  label?: string
  returnKeyType?: string
  autoCapitalize?: string
  autoCorrect?: boolean
  width?: number
  height?: number
  disabled?: boolean
  placeholder?: string
}
