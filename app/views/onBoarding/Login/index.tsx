import React from 'react'
import { View } from 'react-native'
import { Button, Input, Layout } from '@common'
import { inputType, buttonType } from '@core-constants'
import styles from './styles'

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

export default Login
