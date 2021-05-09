import React from 'react'
import {TouchableOpacity,View,Text,StyleSheet,Image,Dimensions} from 'react-native'

const CategoryGrid = ({itemData,onSelect}) => {    
    const logo='../assets/techs/react.png'
    console.log(typeof logo)
    return (
        <TouchableOpacity
            style={styles.gridItem} 
                onPress={onSelect}
            > 
                <View style={{...styles.container, ...{backgroundColor:itemData.item.color}}}>
                    <Text style={styles.title} >
                        {itemData.item.title}
                    </Text>
                </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:150
    },
    container:{
        flex:1,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:22,
        fontFamily:'open-sans'
    }
})

export default CategoryGrid
