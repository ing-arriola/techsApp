import React from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'

const CategoriesTechsScreen = (props) => {
    return (
        <View style={styles.screen} >
            <Text>
            CategoriesTechsScreen
            </Text>
            <Button title='Go to techDetail!' onPress={()=>{
                props.navigation.navigate({
                    routeName : 'TechDetail'
                })
            }}  />
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

export default CategoriesTechsScreen