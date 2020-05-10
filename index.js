/**
 * @format
 */

import { AppRegistry } from 'react-native'
import Navigators from './app/navigators/index'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => Navigators)
