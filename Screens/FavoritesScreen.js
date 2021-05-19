import React from 'react'
import {View,StyleSheet} from 'react-native'
import TechList from '../components/TechList'
import { HeaderButtons, Item  } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'
import CustomHButon from '../components/CustomHButon'
import Empty from '../assets/empty.svg'
import DefaultText from '../components/DefaulText'




const FavoritesScreen = (props) => {
    const availableTechs = useSelector(state => state.techs.favoritesTechs)

    if(availableTechs.length === 0){
        return(
            <View style={styles.emptyContainer} >
                <Empty width={300} height={200} />
                <DefaultText>
                    There are not Favorites yet, please add some favorites :)
                </DefaultText>
            </View>
        )
    }

    return (
        <TechList 
            techsToDisplay={availableTechs}
            navigation={props.navigation}
            />
    )
}

export const favoritesOptions= navData => {
    return {  
        headerTitle : 'Favorites Techs',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHButon} >
        <Item
            iconName='menu'
            onPress={()=>{
                navData.navigation.toggleDrawer()
            }}
        />
    </HeaderButtons>
    }
}

const styles=StyleSheet.create({
    emptyContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default FavoritesScreen