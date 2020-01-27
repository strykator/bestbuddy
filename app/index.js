import React, { useState } from 'react'
import { View, TextInput, Text, NativeModules } from 'react-native'
import Layout from './views/@common/Layout'
import { dimension } from './styles'

const Photo = NativeModules.Photo
Photo.addEvent('Birthday Party', '4 Privet Drive, Surrey')
Photo.getEvent('Christmas', '6936 somerset')

const App = () => {
  const [value, setValue] = useState('')
  const footer = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'flex-end'
      }}>
      <Text>Hellow</Text>
    </View>
  )

  return (
    <Layout>
      <View
        style={{
          flex: 1,
          backgroundColor: 'blue',
          justifyContent: 'flex-end'
        }}>
        <TextInput
          style={{
            height: 40,
            width: dimension.fullWidth,
            backgroundColor: 'yellow'
          }}
          returnKeyType={'next'}
          placeholder="Type here to translate!"
          onChangeText={text => setValue(text)}
          value={value}
        />
        <View style={{ height: 50 }} />
        <TextInput
          style={{
            height: 40,
            width: dimension.fullWidth,
            backgroundColor: 'yellow'
          }}
          placeholder="Type here to translate!"
          onChangeText={text => setValue(text)}
          value={value}
        />
        <View style={{ height: 50 }} />
        <TextInput
          style={{
            height: 40,
            width: dimension.fullWidth,
            backgroundColor: 'yellow'
          }}
          placeholder="Type here to translate!"
          onChangeText={text => setValue(text)}
          value={value}
        />
        <View style={{ height: 50 }} />
        <TextInput
          style={{
            height: 40,
            width: dimension.fullWidth,
            backgroundColor: 'yellow'
          }}
          placeholder="Type here to translate!"
          onChangeText={text => setValue(text)}
          value={value}
        />
      </View>
    </Layout>
  )
}

export default App
