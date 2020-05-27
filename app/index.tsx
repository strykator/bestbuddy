import React from 'react'
import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import { Layout } from '@core-components'
import Home from './views/Home/index'

const App = () => {
  const navigation = useNavigation()

  if (__DEV__) {
    const DevMenu = require('react-native-dev-menu')
    DevMenu.addItem('Show Storybook', () => navigation.navigate('Storybook'))
  }

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Layout>
        <Home />
      </Layout>
    </ApplicationProvider>
  )
}

export default App
