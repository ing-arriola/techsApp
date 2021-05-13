import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { HeaderButtons, Item  } from 'react-navigation-header-buttons'
import CustomHButon from '../components/CustomHButon'

const FiltersScreen = (props) => {
    return (
        <View style={styles.screen} >
            <Text>
            FiltersScreen
            </Text>
        </View>
    )
}

FiltersScreen.navigationOptions = navData => {
    return {  
        headerTitle : 'Filtered Techs',
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

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default FiltersScreen