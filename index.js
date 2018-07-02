import { AppRegistry ,YellowBox} from 'react-native';
// import App from './App';
import MainApp from './MainApp';
import ExampleReduxApp from './ExampleReduxApp';
import Root from './js/Root';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('ExpressSender', () => Root);
