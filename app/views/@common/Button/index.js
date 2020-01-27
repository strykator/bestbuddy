import React from 'react'
import { CoreButton } from '../../../../core/components'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.object
}

const Layout = ({ children }) => {
  return <CoreButton>{children}</CoreButton>
}

Layout.propTypes = propTypes

export default Layout
