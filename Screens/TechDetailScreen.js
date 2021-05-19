import React,{ useCallback,useEffect } from 'react'
import {ScrollView,View,Text,StyleSheet,Button,Image} from 'react-native'
import { HeaderButtons, Item  } from 'react-navigation-header-buttons'
import CustomHButon from '../components/CustomHButon'
import {useDispatch,useSelector } from 'react-redux'
import {toogleFavorites} from '../store/actions/techs'

const TechDetailScreen = (props) => {
    const selectedTech = props.route.params.item
    const isFav = props.route.params.isFavorite
    const isTechFavorite =  useSelector(state => state.techs.favoritesTechs.some(tech => tech.id === selectedTech.id))
    const dispatch = useDispatch()

    const toggleFavsHandler = useCallback(() => {
            dispatch(toogleFavorites(selectedTech))
        },[dispatch,selectedTech]
    )

    useEffect(()=>{
        props.navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHButon} >
                <Item
                    title='Favorite'
                    iconName= {isFav ? 'star' : 'star-outline'}
                    onPress={toggleFavsHandler}
                />
            </HeaderButtons>
            )
        })
    },[toggleFavsHandler,isFav])


    useEffect(()=>{
        props.navigation.setParams({isFavorite:isTechFavorite})
    },[isTechFavorite])

    return (
        <ScrollView>
            <View style={styles.screen} >
                <Image
                    source={selectedTech.image}
                />
                <Text>
                {selectedTech.name}
                </Text>
                <Button title='Go back to Categories' onPress={()=>{
                    props.navigation.popToTop()
                }}  />
            </View>
        </ScrollView>
    )
}

export const techDetailOptions = navigationData => { 
    const itemPassed=navigationData.route.params.item  
    return { 
        headerTitle : itemPassed.name,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHButon} >
            <Item
                title='Favorite'
                iconName= {isFav ? 'star' : 'star-outline'}
                onPress={toggleFavorites}
            />
        </HeaderButtons>
        )
    }
}


const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default TechDetailScreen