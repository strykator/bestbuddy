import 'react-native-gesture-handler' // need this to avoid crash reac-navigation https://reactnavigation.org/docs/getting-started/
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import App from '../index'
import OnBoarding from '../views/onBoarding'
import AuthenticationNavigator from './AuthenticationNavigator'
import Storybook from '../../storybook'

const Navigation = () => {
  const Stack = createStackNavigator()

  const AddStorybookInDev = () =>
    __DEV__ ? <Stack.Screen name="Storybook" component={Storybook} /> : null

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName="AuthenticationNavigator">
        <Stack.Screen
          name="AuthenticationNavigator"
          component={AuthenticationNavigator}
        />
        <Stack.Screen name="Home" component={App} />
        {AddStorybookInDev()}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
