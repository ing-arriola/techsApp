import React from 'react'
import {StyleSheet,FlatList} from 'react-native'
import {CATEGORIES} from '../data/data'
import Colors from '../constants/Colors' 
import CategoryGrid from '../components/CategoryGrid'

const CategoriesScreen = (props) => {

    const renderGrridItem = (itemData) => {
        return( 
            <CategoryGrid 
                itemData={itemData}
                onSelect={()=>{
                    props.navigation.navigate({
                        routeName:'CategoriesTechs',
                        params:{
                            item:itemData.item
                        }
                    })
                }}
            />
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
    headerTitle : 'Techs Categories',
    headerStyle:{
        backgroundColor:Colors.primaryColor
    },
    headerTintColor: "white",
    headerTitleAlign:'center'
}


const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default CategoriesScreen
