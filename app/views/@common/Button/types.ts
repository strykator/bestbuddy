export interface IButton {
  type?: string
  subType?: string
  text: string
  onPress(): any
  halfSize?: boolean
  fullSize?: boolean
  width: number | string
}

export interface ISolidButton {
  onPress(): any
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

export interface IOutlinedButton extends ISolidButton {
  type?: string
}

export interface ITextButton {
  text: string
  onPress(): any
  width?: number | string
}
