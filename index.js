import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './Views/home.view';
import StarWars from './Views/star-wars.view'

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
    StarsWars: {
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
