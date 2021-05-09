import React from 'react'
import {View,Text,StyleSheet,Button,FlatList} from 'react-native'
import {TECHS} from '../data/data'
import Tech from '../models/Tech'

const CategoriesTechsScreen = (props) => {
    const itemPassed=props.navigation.getParam('item')
    const techsToDisplay =  TECHS.filter(tech => tech.category.indexOf(itemPassed.id)>=0)

    const renderTechItem = (itemData) => {
        return(
            <View>
                <Text>
                    {itemData.item.name}
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.screen} >
            <FlatList
                data={techsToDisplay}
                keyExtractor={(item,index) => item.id}
                renderItem={renderTechItem}
            />
        </View>
    )
}

CategoriesTechsScreen.navigationOptions = navigationData => { 
    const itemPassed=navigationData.navigation.getParam('item')
    return {
        headerTitle : itemPassed.title,
    }
}


const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default CategoriesTechsScreen

/*
<Text>
            CategoriesTechsScreen
            </Text>
            <Button title='Go to techDetail!' onPress={()=>{
                props.navigation.navigate({
                    routeName : 'TechDetail'
                })
            }}  />
            <Text>
                {itemPassed.title}
            </Text>

*/