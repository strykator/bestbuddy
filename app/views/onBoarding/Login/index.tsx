import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { inputType, buttonType } from '@core-constants'
import { Layout, KeyboardAware, Input, Button } from '@core-components'
import styles from './styles'

const Login = () => {
  const navigation = useNavigation()

  if (__DEV__) {
    const DevMenu = require('react-native-dev-menu')
    DevMenu.addItem('Show Storybook', () => navigation.navigate('Storybook'))
  }

  return (
    <KeyboardAware scrollHeight={100}>
      <Layout containerStyle={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <Input label="Username" type={inputType.TYPE2} />
            <Input
              label="Password"
              type={inputType.TYPE2}
              secureTextEntry
              toggleSecureTextEntry
            />
          </View>
          <View>
            <Button
              type={buttonType.SOLID}
              text="Sign In"
              onPress={() => navigation.navigate('Home')}
            />
            <View style={styles.space} />
            <Button
              type={buttonType.TEXT}
              text="Create an Account"
              onPress={() => navigation.navigate('SignUp')}
            />
          </View>
        </View>
      </Layout>
    </KeyboardAware>
  )
}

export default Login
