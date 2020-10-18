import React from 'react';
import { createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import {StyleSheet, Text, View} from 'react-native';
import searchScreen from "./src/screens/searchScreen";

const navigator = createStackNavigator(
    {
        Search: searchScreen
    }
    ,{
        initialRouteName: 'Search',
        defaultNavigationOptions : {
            title : 'Iskander Appa'
        }
    }
);

export default  createAppContainer(navigator);
