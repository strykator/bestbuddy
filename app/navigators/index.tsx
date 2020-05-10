import 'react-native-gesture-handler' // need this to avoid crash reac-navigation https://reactnavigation.org/docs/getting-started/
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import App from '../index'
import OnBoarding from '../views/onBoarding'
import Storybook from '../../storybook'

const Navigators = () => {
  const Stack = createStackNavigator()

  const AddStorybookInDev = () =>
    __DEV__ ? <Stack.Screen name="Storybook" component={Storybook} /> : null

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        {AddStorybookInDev()}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigators
