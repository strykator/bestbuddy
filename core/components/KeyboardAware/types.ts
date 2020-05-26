import { ReactNode } from 'react'

export interface IKeyboardAware {
  children?: ReactNode
  extraHeight?: number
  extraScrollHeight?: number
  scrollHeight?: number
}
