import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import Header from '../shared/header'
import React from 'react'
const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            // title: 'GameZone',
            // headerStyle: { backgroundColor: 'silver' }
            return {
                headerTitle: () => <Header navigation={navigation} title='GameZonee' />,
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
            // headerStyle: { backgroundColor: 'silver' }
        }
    },

}
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: 'silver', height: 80 }
    }
})

export default HomeStack;