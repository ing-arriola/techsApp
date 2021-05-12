import React from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'
import { HeaderButtons, Item  } from 'react-navigation-header-buttons'
import CustomHButon from '../components/CustomHButon'

const TechDetailScreen = (props) => {
    console.log(props.navigation.getParam('item'))
    return (
        <View style={styles.screen} >
            <Text>
            TechDetailScreen
            </Text>
            <Button title='Go back to Categories' onPress={()=>{
                props.navigation.popToTop()
            }}  />
        </View>
    )
}

TechDetailScreen.navigationOptions = navigationData => { 
    const itemPassed=navigationData.navigation.getParam('item')
    return { 
        headerTitle : itemPassed.name,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHButon} >
            <Item
                iconName='star'
                onPress={()=>{console.log('works!!')}}
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