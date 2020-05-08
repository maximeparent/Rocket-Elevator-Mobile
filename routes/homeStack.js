import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home';
import Status from '../screens/Status';
import Login from '../screens/Login';


const screens = {
    Login: {
        screen: Login
    },
    Home: {
        screen: Home
    },
    Status: {
        screen: Status
    }
}

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);