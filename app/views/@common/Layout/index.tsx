import React from 'react'
import { Layout as CoreLayout } from '@components'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.object
}

const Layout = ({ children }) => {
  return <CoreLayout>{children}</CoreLayout>
}

Layout.propTypes = propTypes

export default Layout
