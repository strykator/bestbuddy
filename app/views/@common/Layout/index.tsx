import React from 'react'
import { Layout as CoreLayout } from '@components'

const Layout = ({ children, containerStyle }) => {
  return <CoreLayout containerStyle={containerStyle}>{children}</CoreLayout>
}

export default Layout
