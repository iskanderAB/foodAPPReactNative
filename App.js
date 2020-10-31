import React from 'react';
import { createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import {StyleSheet, Text, View} from 'react-native';
import searchScreen from "./src/screens/searchScreen";
import ResultsShowScreen from "./src/screens/RsultsShowScreen";

const navigator = createStackNavigator(
    {
        Search: searchScreen,
        ResultsShow : ResultsShowScreen
    }
    ,{
        initialRouteName: 'Search',
        defaultNavigationOptions : {
            title : 'Iskander App'
        }
    }
);

export default  createAppContainer(navigator);
