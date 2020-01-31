import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import Layout from '@common/Layout'
import SolidButton from '@common/SolidButton'
import OutlinedButton from '@common/OutlinedButton'
import { dimension } from './styles'

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
          backgroundColor: 'white',
          justifyContent: 'flex-end'
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}>
          <SolidButton text="CLICK ME" />
          <OutlinedButton disabled half text="OUTLINED BUTTON" />
        </View>

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
