import React from 'react'
import {StyleSheet,FlatList} from 'react-native'
import {CATEGORIES} from '../data/data'
import CategoryGrid from '../components/CategoryGrid'
import { HeaderButtons, Item  } from 'react-navigation-header-buttons'
import CustomHButon from '../components/CustomHButon'

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
       style={styles.back}
       />
    )
}

CategoriesScreen.navigationOptions = navData => {
    return {  
        headerTitle : 'Techs Categories',
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


const styles = StyleSheet.create({
    back:{
        backgroundColor:'#fff'
    }
})

export default CategoriesScreen
