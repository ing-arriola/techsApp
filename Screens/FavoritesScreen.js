import React from 'react'
import TechList from '../components/TechList'
import {TECHS} from '../data/data'
import { HeaderButtons, Item  } from 'react-navigation-header-buttons'
import CustomHButon from '../components/CustomHButon'



const FavoritesScreen = (props) => {
    
    const techsToDisplay =  TECHS.filter(tech => tech.id === 't1' || tech.id === 't2'  )
    
    
    return (
        <TechList 
        techsToDisplay={techsToDisplay}
        navigation={props.navigation}
        />
    )
}

FavoritesScreen.navigationOptions = navData => {
    return {  
        headerTitle : 'Favorites Techs',
        headerLeft: <HeaderButtons HeaderButtonComponent={CustomHButon} >
        <Item
            iconName='menu'
            onPress={()=>{
                navData.navigation.toggleDrawer()
            }}
        />
    </HeaderButtons>
    }
}

export default FavoritesScreen