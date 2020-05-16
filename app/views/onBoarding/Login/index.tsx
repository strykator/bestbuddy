import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import Input from '@common/Input'
import Layout from '@common/Layout'
import { Button } from '@common'
import { buttonType } from '@constants'
import { inputType } from '@constants'
import styles from './styles'

const propTypes = {
  props: PropTypes.object
}

const Login = () => {
  return (
    <Layout containerStyle={styles.container}>
      <View>
        <View style={styles.inputContainer}>
          <Input label="Username" type={inputType.TYPE2} />
          <Input
            label="Password"
            type={inputType.TYPE2}
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
