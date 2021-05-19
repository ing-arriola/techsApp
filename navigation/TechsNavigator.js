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
const FavoritesStackNavigator = () => {
    return(
        <FavoritesNavigator.Navigator screenOptions={navOptions}>
            <FavoritesNavigator.Screen 
                name='FavoritesScreen'
                component={FavoritesScreen}
                options={favoritesOptions}
            />
             <FavoritesNavigator.Screen 
                name='TechDetail'
                component={TechDetailScreen}
                options={techDetailOptions}
            />
        </FavoritesNavigator.Navigator>
    )
}

const FiltersStackNavigator = () => {
    return (
        <FilterNavigator.Navigator screenOptions={navOptions} >
            <FilterNavigator.Screen 
                name='Filter'
                component={FiltersScreen}
                options={filtersOptions}
            />
        </FilterNavigator.Navigator>
    )
}

const MaterialStackNavigator = () => {
    return(
        <AndroidTabNavigator.Navigator
            activeColor='#fff'
            shifting={true}
        >    
            <AndroidTabNavigator.Screen 
                name='Techs'
                component={TechStackNavigator}
                options={{
                    tabBarLabel:'Techs',//This is up to you becasue by default values are the key of this objetc, I mean Techs here
                    tabBarIcon:(tabInfo) => {
                        return <Ionicons 
                                name='code'
                                size={25}
                                color={tabInfo.color}
                            />
                        },
                    tabBarColor:Colors.primaryColor,
                    tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily:'open-sans'}} >Techs</Text> :'Techs'
                }}
            />
            <AndroidTabNavigator.Screen
                name='Favorites'
                component={FavoritesStackNavigator}
                options={{
                        tabBarLabel:'Favorites',
                        tabBarIcon:(tabInfo) => {
                            return <Ionicons 
                                        name='star' 
                                        size={25}
                                        color={tabInfo.color}
                                    />
                        },
                        tabBarColor:Colors.accentColor,
                        tabBarLabel:Platform.OS === 'android' ? <Text style={{fontFamily:'open-sans'}} >Favorites</Text> :'Techs'
                        }
                    }
            />
        </AndroidTabNavigator.Navigator>
    )
}


const IosStackNavigator = () => {
    return(
        <IosTabNavigator.Navigator
        tabBarOptions= {{
            labelStyle:{
                fontFamily:'open-sans' // just for ios
            },
            activeTintColor:Colors.accentColor
            }}
        >
            <IosTabNavigator.Screen 
                name='Techs'
                component={TechStackNavigator}
                options={{
                    tabBarLabel:'Techs',//This is up to you becasue by default values are the key of this objetc, I mean Techs here
                    tabBarIcon:(tabInfo) => {
                        return <Ionicons 
                                name='code'
                                size={25}
                                color={tabInfo.tintColor}
                            />
                        },
                    tabBarColor:Colors.primaryColor,
                    tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily:'open-sans'}} >Techs</Text> :'Techs'
                }}
            />
            <IosTabNavigator.Screen
                name='Favorites'
                component={FavoritesStackNavigator}
                options={{
                        tabBarLabel:'Favorites',
                        tabBarIcon:(tabInfo) => {
                            return <Ionicons 
                                        name='star' 
                                        size={25}
                                        color={tabInfo.tintColor}
                                    />
                        },
                        tabBarColor:Colors.accentColor,
                        tabBarLabel:Platform.OS === 'android' ? <Text style={{fontFamily:'open-sans'}} >Favorites</Text> :'Techs'
                        }
                    }
            />
        </IosTabNavigator.Navigator>
    )
}



    </NavigationContainer>
} 

export default TechsNavigator