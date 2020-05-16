export interface IButton {
  onPress?(): any
  text: string
  width?: number | string
  height?: number | string
  halfSize?: boolean
  fullSize?: boolean
  borderRadius?: number
  borderColor?: string
  backgroundColor?: string
  textColor?: string
  disabled?: boolean
  loading?: boolean
}
