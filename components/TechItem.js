import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,ImageBackground} from 'react-native'
import { color } from 'react-native-reanimated'

const TechItem = ({onSelectTech,name,image}) => {
    return (
        <View style={styles.techItem} >
            <TouchableOpacity onPress={onSelectTech} >
                <View>
                    <View >
                        <ImageBackground 
                            source={image}
                            style={styles.image}
                        >
                            <Text style={styles.name} >
                                {name}
                            </Text>
                        </ImageBackground>
                        
                    </View>
                    <View style={styles.techRow}>

                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create( 
    {
        techItem:{
            height:200,
            width:'90%',
            backgroundColor:'#ccc',
            overflow:'hidden',
            borderRadius:10,
            marginVertical:15,
            alignSelf:'center'
        },
        techRow:{
            flexDirection:'row'
        },
        image:{
            width:'100%',
            height:'100%'
        },
        name:{
            backgroundColor:'rgba(0,0,0,0.5)',
            color:'#fff',
            fontSize:20,
            textAlign:'center'


        }
    }
  )

export default TechItem
