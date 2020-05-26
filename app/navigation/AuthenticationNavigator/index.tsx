import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OnBoarding from '../../views/onBoarding'
import SignUp from '../../views/onBoarding/Signup'

const AuthenticationNavigator = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={OnBoarding}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}

export default AuthenticationNavigator
