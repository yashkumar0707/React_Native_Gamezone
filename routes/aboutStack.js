import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import About from '../screens/about'
import Header from '../shared/header'
import React from 'react'
const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            // title: 'GameZone',
            // headerStyle: { backgroundColor: 'silver' }
            return {
                headerTitle: () => <Header navigation={navigation} title="AboutGameZonee" />,
            }
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