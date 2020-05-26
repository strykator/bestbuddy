import React from 'react'
import { View, Text } from 'react-native'
import { Button } from '@common'
import PlaidLink from 'react-native-plaid-link-sdk'
import Config from 'react-native-config'
import styles from './styles'

const Home = () => {
  return (
    <View style={styles.container}>
      <PlaidLink
        publicKey={Config.PLAID_PUBLIC_KEY}
        clientName={Config.PLAID_CLIENT_ID}
        env={Config.PLAID_ENV} // 'sandbox' or 'development' or 'production'
        product={[Config.PLAID_PRODUCTS]}
        onSuccess={data => console.log('success: ', data)}
        onExit={data => console.log('exit: ', data)}
        // Optional props
        component={Button}
        componentProps={{ text: 'Add Account', halfSize: true }}
        countryCodes={[Config.PLAID_COUNTRY_CODES]}
        language="en">
        <Text>Add Account</Text>
      </PlaidLink>
    </View>
  )
}

export default Home
