import React from 'react'
import { storiesOf } from '@storybook/react-native'
import SolidButton from './SolidButton'
import OutlinedButton from './OutlinedButton'
import Input from './Input'

storiesOf('BEST BUDDY')
  .add('Input', () => <Input />)
  .add('OutlinedButton', () => <OutlinedButton />)
  .add('SolidButton', () => <SolidButton />)
