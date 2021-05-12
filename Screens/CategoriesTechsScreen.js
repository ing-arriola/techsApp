import React from 'react'
import {View,Text,StyleSheet,Button,FlatList} from 'react-native'
import {TECHS} from '../data/data'
import Tech from '../models/Tech'
import TechItem from '../components/TechItem'

const CategoriesTechsScreen = (props) => {
    const itemPassed=props.navigation.getParam('item')
    const techsToDisplay =  TECHS.filter(tech => tech.category.indexOf(itemPassed.id)>=0)

    const renderTechItem = (itemData) => {
        console.log(itemData.item.image)
        return(
            <TechItem 
            name={itemData.item.name}
            image={itemData.item.image}
            onSelectTech={()=>{console.log('test')}}
            />
        )
    }

    return (
        <View style={styles.screen} >
            <FlatList
                data={techsToDisplay}
                keyExtractor={(item,index) => item.id}
                renderItem={renderTechItem}
                style={{width:'100%'}}
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