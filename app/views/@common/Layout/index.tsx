import React from 'react'
import { Layout as CoreLayout } from '@core-components'
import { ILayout } from './types'

const Layout: React.FC<ILayout> = ({ children, containerStyle }) => {
  return <CoreLayout containerStyle={containerStyle}>{children}</CoreLayout>
}

export default Layout
