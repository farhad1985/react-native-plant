import React from 'react'
import { Image } from 'react-navigation';
import { createAppContainer, createStackNavigator } from 'react-navigation'

import Welcome from '../screens/Welcome'
// import Login from '../screens/Login'
// import Browse from '../screens/Browse'
// import Product from '../screens/Product'
// import Setting from '../screens/Setting'
// import Explore from '../screens/Explore'

import { theme } from '../constants'
  
const screens = createStackNavigator({
    Welcome,
    // Login,
    // Browse,
    // Product,
    // Setting,
    // Explore
}, {
    defaultNavigationOptions: {
        headerStyle: {},
        headerBackImage: <Image />,
        headerLeftContainerStyle: {},
        headerRightContainerStyle: {}
    }
})

export default createAppContainer(screens)