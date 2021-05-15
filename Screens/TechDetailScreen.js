import React from 'react'
import {ScrollView,View,Text,StyleSheet,Button,Image} from 'react-native'
import { HeaderButtons, Item  } from 'react-navigation-header-buttons'
import CustomHButon from '../components/CustomHButon'

const TechDetailScreen = (props) => {
    const selectedTech = props.navigation.getParam('item')
    console.log(selectedTech)
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