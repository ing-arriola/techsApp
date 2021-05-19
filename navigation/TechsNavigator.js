import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer  } from '@react-navigation/native'
import {Platform,Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator  } from '@react-navigation/drawer'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Colors from '../constants/Colors'
import FavoritesScreen,{ favoritesOptions } from '../Screens/FavoritesScreen' 
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen, { screenOptions } from '../Screens/CategoriesScreen'
import CategoriesTechsScreen, { categoriesOptions } from '../Screens/CategoriesTechsScreen'
import TechDetailScreen,{ techDetailOptions } from '../Screens/TechDetailScreen'
import FiltersScreen,{ filtersOptions } from '../Screens/FiltersScreen'

const navOptions = {
    headerStyle:{
        backgroundColor:Colors.primaryColor
    },
    headerTitleStyle:{
        fontFamily:'open-sans-bold'
    },
    headerTintColor: "white",
    headerTitleAlign:'center' 
}

const TechNavigator = createStackNavigator()
const FavoritesNavigator = createStackNavigator()
const FilterNavigator = createStackNavigator()
const AndroidTabNavigator = createMaterialBottomTabNavigator()
const IosTabNavigator = createBottomTabNavigator()
const MainNavigator = createDrawerNavigator()

const TechStackNavigator = () => {
    return(
        <TechNavigator.Navigator screenOptions={navOptions} >
            <TechNavigator.Screen 
                name='screen'
                component={CategoriesScreen}
                options={screenOptions}
            />
            <TechNavigator.Screen 
                name='CategoriesTechs'
                component={CategoriesTechsScreen}
                options={categoriesOptions}
            />
            <TechNavigator.Screen 
                name='TechDetail'
                component={TechDetailScreen}
                options={techDetailOptions}
            />
        </TechNavigator.Navigator>
    )
}
    </NavigationContainer>
} 

export default TechsNavigator