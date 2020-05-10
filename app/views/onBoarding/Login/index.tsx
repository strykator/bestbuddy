import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import Input from '@common/Input'
import Layout from '@common/Layout'
import Button, { buttonType } from '@common/Button'
import { inputTypes } from '@constants'
import styles from './styles'

const propTypes = {
  props: PropTypes.object
}

const Login = props => {
  return (
    <Layout containerStyle={styles.container}>
      <View>
        <View style={styles.inputContainer}>
          <Input label="Username" type={inputTypes.TYPE2} />
          <Input
            label="Password"
            type={inputTypes.TYPE2}
            secureTextEntry
            toggleSecureTextEntry
          />
          <Button
            type={buttonType.SOLID}
            text="Sign In"
            onPress={() => console.log('Sign In')}
          />
        </View>
      </View>
    </Layout>
  )
}

Login.propTypes = propTypes

export default Login
