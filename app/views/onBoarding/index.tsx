import React from 'react'
import Login from './Login'
import PropTypes from 'prop-types'

const propTypes = {
  props: PropTypes.object
}

const OnBoarding = props => {
  return <Login />
}

OnBoarding.propTypes = propTypes

export default OnBoarding
