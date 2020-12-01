import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import About from '../screens/about'
const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About GameZone',
            // headerStyle: { backgroundColor: 'silver' }
        }
    }
    // Home: {
    //     screen: Home,
    //     navigationOptions: {
    //         title: 'Gamezone',
    //         // headerStyle: { backgroundColor: 'silver' }
    //     }
    // },

}
const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: 'silver', height: 80 }
    }
})

export default AboutStack;