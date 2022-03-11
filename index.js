/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import rootContainer from './src/navigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => rootContainer);
