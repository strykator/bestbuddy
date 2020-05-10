import React from 'react'
import { Layout as CoreLayout } from '@components'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  containerStyle: PropTypes.object
}

const Layout = ({ children, containerStyle }) => {
  return <CoreLayout containerStyle={containerStyle}>{children}</CoreLayout>
}

Layout.propTypes = propTypes

export default Layout
