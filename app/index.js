import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import Layout from './views/@common/Layout/index'

const App = () => {
  const [value, setValue] = useState('')
  const footer = () => (
    <View>
      <Text>Hellow</Text>
    </View>
  )

  return (
    <Layout footer={footer()}>
      <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={text => setValue(text)}
          value={value}
        />
      </View>
    </Layout>
  )
}

export default App
