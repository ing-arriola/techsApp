import React from 'react'
import TechList from '../components/TechList'
import { HeaderButtons, Item  } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'
import CustomHButon from '../components/CustomHButon'




const FavoritesScreen = (props) => {
    const availableTechs = useSelector(state => state.techs.favoritesTechs)

    
    return (
        <TechList 
        techsToDisplay={availableTechs}
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