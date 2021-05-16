import React,{ useCallback,useEffect } from 'react'
import {ScrollView,View,Text,StyleSheet,Button,Image} from 'react-native'
import { HeaderButtons, Item  } from 'react-navigation-header-buttons'
import CustomHButon from '../components/CustomHButon'
import {useDispatch } from 'react-redux'
import {toogleFavorites} from '../store/actions/techs'

const TechDetailScreen = (props) => {
    const selectedTech = props.navigation.getParam('item')
    const dispatch = useDispatch()

    const toggleFavsHandler = useCallback(() => {
            dispatch(toogleFavorites(selectedTech))
        },[dispatch,selectedTech]
    )

    useEffect(()=>{
        props.navigation.setParams({toogleFavs:toggleFavsHandler})
    },[toggleFavsHandler])
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

TechDetailScreen.navigationOptions = navigationData => { 
    const itemPassed=navigationData.navigation.getParam('item')
    const toggleFavorites = navigationData.navigation.getParam('toogleFavs')
    return { 
        headerTitle : itemPassed.name,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHButon} >
            <Item
                iconName='star'
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