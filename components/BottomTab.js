import React from 'react'
import {View, Text} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs' 
import BirdScreen from '../screens/birds'
import CatScreen from '../screens/cats'
import DogScreen from '../screens/dogs'
import FishScreen from '../screens/fishes'

export const BottomTab = createBottomTabNavigator({
    Bird : {screen:BirdScreen},
    Cat : {screen:CatScreen},
    Dog : {screen:DogScreen},
    Fish : {screen:FishScreen}
})