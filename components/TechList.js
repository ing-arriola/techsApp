import React from 'react'
import {View,StyleSheet,FlatList} from 'react-native'
import TechItem from './TechItem'

const TechList = ({techsToDisplay,navigation}) => {

    const renderTechItem = (itemData) => {
        return(
            <TechItem 
            name={itemData.item.name}
            image={itemData.item.image}
            onSelectTech={()=>{
                navigation.navigate({
                    routeName:'TechDetail',
                    params:{
                        item:itemData.item
                    }
                })
            }}
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
const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default TechList
