import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, Input, Layout } from '@common'
import { KeyboardAware } from '@core-components'
import { inputType, buttonType } from '@core-constants'
import styles from './styles'

const SignUp = () => {
  const navigation = useNavigation()

  return (
    <KeyboardAware scrollHeight={100}>
      <Layout containerStyle={styles.container}>
        <View>
          <View style={styles.inputContainer}>
            <Input label="Email" type={inputType.TYPE2} />
            <Input
              label="Password"
              type={inputType.TYPE2}
              secureTextEntry
              toggleSecureTextEntry
            />
            <Input
              label="Confirm Password"
              type={inputType.TYPE2}
              secureTextEntry
              toggleSecureTextEntry
            />
            <Button
              type={buttonType.SOLID}
              text="Sign Up"
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </View>
      </Layout>
    </KeyboardAware>
  )
}

export default SignUp
