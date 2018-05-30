import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './Views/home.view';
import StarWars from './Views/star-wars.view'


import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'The StackNavigator function name is deprecated, please use createStackNavigator instead']);

const routes = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: 'Home',
            headerTintColor: '#ffffff',
            headerStyle: {
                backgroundColor: '#2b7cd7',
            }
        },
    },
    Star: {
        screen: StarWars,
        navigationOptions: {
            headerTitle: 'Personagens',
            headerTintColor: '#ffffff',
            headerStyle: {
                backgroundColor: '#2b7cd7',
            }
        }
    },
});

AppRegistry.registerComponent('minicurso', () => routes);
