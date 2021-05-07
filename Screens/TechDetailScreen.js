import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const TechDetailScreen = () => {
    return (
        <View style={styles.screen} >
            <Text>
            TechDetailScreen
            </Text>
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

export default TechDetailScreen