import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer  } from 'react-navigation'
import Colors from '../constants/Colors'

import CategoriesScreen from '../Screens/CategoriesScreen'
import CategoriesTechsScreen from '../Screens/CategoriesTechsScreen'
import TechDetailScreen from '../Screens/TechDetailScreen'

const TechsNavigator = createStackNavigator({
    Categories:{
        screen:CategoriesScreen,
        navigationOptions : {
            headerTitle : 'Techs Categories',
            headerStyle:{
                backgroundColor:Colors.primaryColor
            },
            headerTintColor: "white",
            headerTitleAlign:'center'
        }
    }, 
    CategoriesTechs:CategoriesTechsScreen,
    TechDetail:TechDetailScreen
})

export default createAppContainer(TechsNavigator) 