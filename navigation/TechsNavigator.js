import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer  } from 'react-navigation'
import {Platform} from 'react-native'
import { createBottomTabNavigator  } from 'react-navigation-tabs'
import { createDrawerNavigator  } from 'react-navigation-drawer'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Colors from '../constants/Colors'
import FavoritesScreen from '../Screens/FavoritesScreen'
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from '../Screens/CategoriesScreen'
import CategoriesTechsScreen from '../Screens/CategoriesTechsScreen'
import TechDetailScreen from '../Screens/TechDetailScreen'
import FiltersScreen from '../Screens/FiltersScreen'

const navOptions = {
    headerStyle:{
        backgroundColor:Colors.primaryColor
        },
        headerTintColor: "white",
        headerTitleAlign:'center' 
}

const TechsNavigator = createStackNavigator({
    Categories:{
        screen:CategoriesScreen
    }, 
    CategoriesTechs:CategoriesTechsScreen, 
    TechDetail:TechDetailScreen 
    },
    {
        defaultNavigationOptions: navOptions
    }
)

const FavoritesNavigator = createStackNavigator({
    FavoritesScreen:FavoritesScreen,
    TechDetail:TechDetailScreen
},
{
    defaultNavigationOptions: navOptions
})

 const TabConfiguration = {
    Techs:{
        screen:TechsNavigator,
        navigationOptions:{
            tabBarLabel:'Techs',//This is up to you becasue by default values are the key of this objetc, I mean Techs here
            tabBarIcon:(tabInfo) => {
                return <Ionicons 
                        name='code'
                        size={25}
                        color={tabInfo.tintColor}
                    />
            },
            tabBarColor:Colors.primaryColor
        }
    },
    Favorites : {
        screen:FavoritesNavigator,
        navigationOptions:{
            tabBarLabel:'Favorites',
            tabBarIcon:(tabInfo) => {
                return <Ionicons 
                        name='star'
                        size={25}
                        color={tabInfo.tintColor}
                    />
            },
            tabBarColor:Colors.accentColor
        }
    }
}

const BottomNavigator = Platform.OS === "android" 
    ? createMaterialBottomTabNavigator(TabConfiguration,{
        activeColor:'#fff',
        shifting:true
        /* 
        barStyle:{ 
            backgroundColor: Colors.primaryColor
        }
        */
    }) 
    : createBottomTabNavigator(TabConfiguration,{
        tabBarOptions: {
            activeTintColor:Colors.accentColor
        }
    })

const FilterNavigator = createStackNavigator({
        Filter: FiltersScreen
    },
    {
        defaultNavigationOptions: navOptions
    }
    )

const MainNavigator = createDrawerNavigator({ 
        TechsFavs: BottomNavigator,
        Filter : FilterNavigator
    })

export default createAppContainer(MainNavigator) 