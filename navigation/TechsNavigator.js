import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer  } from 'react-navigation'

import CategoriesScreen from '../Screens/CategoriesScreen'
import CategoriesTechsScreen from '../Screens/CategoriesTechsScreen'
import TechDetailScreen from '../Screens/TechDetailScreen'

const TechsNavigator = createStackNavigator({
    Categories:CategoriesScreen,
    CategoriesTechs:CategoriesTechsScreen,
    TechDetail:TechDetailScreen
})

export default createAppContainer(TechsNavigator) 