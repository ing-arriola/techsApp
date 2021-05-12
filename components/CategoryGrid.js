import React from 'react'
import {TouchableOpacity,View,Text,StyleSheet,Image,Dimensions} from 'react-native'

const CategoryGrid = ({itemData,onSelect}) => {    
    return (
        <TouchableOpacity
            style={styles.gridItem} 
                onPress={onSelect}
            > 
                <View style={{...styles.container, ...{backgroundColor:'rgba(0,0,0,0.20)'}}}>
                    <Text style={styles.title} >
                        {itemData.item.title}
                    </Text>
                    <View style={styles.imageContainer} >
                        <Image 
                            style={styles.image}
                            source={itemData.item.logo}
                        />
                    </View>
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
    },
    imageContainer:{
        width:Dimensions.get('window').width * 0.21,
        height:Dimensions.get('window').width  * 0.21,
        //borderRadius:Dimensions.get('window').width  * 0.25 /2,
        //borderWidth:1,
        //borderColor:'#ccc',
        //overflow:'hidden',
        marginVertical:5
    },
    image:{
        width:'100%',
        height:'100%',
    }
})

export default CategoryGrid
