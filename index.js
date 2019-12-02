/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/index';
import KeyboardAware from './app/views/@examples/KeyboardAware/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => KeyboardAware);
