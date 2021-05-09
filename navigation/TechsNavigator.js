import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer  } from 'react-navigation'
import Colors from '../constants/Colors'

import CategoriesScreen from '../Screens/CategoriesScreen'
import CategoriesTechsScreen from '../Screens/CategoriesTechsScreen'
import TechDetailScreen from '../Screens/TechDetailScreen'

const TechsNavigator = createStackNavigator({
    Categories:{
        screen:CategoriesScreen
    }, 
    CategoriesTechs:CategoriesTechsScreen, 
    TechDetail:TechDetailScreen
    },
    {
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor:Colors.primaryColor
                },
                headerTintColor: "white",
                headerTitleAlign:'center' 
        }
    }
)

export default createAppContainer(TechsNavigator) 