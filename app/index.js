import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import Layout from '@common/Layout'
import SolidButton from '@common/SolidButton'
import OutlinedButton from '@common/OutlinedButton'
import Input from '@common/Input'
import { dimension } from './styles'
import { inputTypes } from '@constants'
import Home from './views/home'

const App = () => {
  const [value, setValue] = useState('')

  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default App
