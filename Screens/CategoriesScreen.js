import React from 'react'
import {View,Text,StyleSheet,Button,FlatList,TouchableOpacity} from 'react-native'
import {CATEGORIES} from '../data/data'

const CategoriesScreen = (props) => {
    const renderGrridItem = (itemData) => {
        return(
            <TouchableOpacity
            style={styles.gridItem} 
                onPress={()=>{
                    props.navigation.navigate({routeName:'CategoriesTechs'})
                }}
            >
                <View >
                    <Text>
                        {itemData.item.title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }


    return (
       <FlatList 
       data={CATEGORIES}
       numColumns={2}  
       renderItem={renderGrridItem}
       />
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle : 'Techs Categories'
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    gridItem:{
        flex:1,
        margin:15,
        height:150
    }
})

export default CategoriesScreen
