import React,{useState,useEffect,useCallback} from 'react'
import {View,Text,StyleSheet,Switch,Platform} from 'react-native'
import { HeaderButtons, Item  } from 'react-navigation-header-buttons'
import {useDispatch} from 'react-redux'
import {setFilters} from '../store/actions/techs'
import CustomHButon from '../components/CustomHButon'
import Colors from '../constants/Colors'

const FilterComponent = ({title,value,onChange}) => {
    return (
        <View style={styles.filterContainer}>
            <Text>{title}</Text>
            <Switch
                trackColor={{true:'#ccc',false:'#ccc'}} 
                thumbColor={Platform.OS === 'android' ?  Colors.primaryColor : ''}
                value={value}
                onValueChange={onChange}
            />   
        </View>
    )
}


const FiltersScreen = (props) => {
const {navigation} = props
const [isFront,setIsFront] = useState(false)
const [isMobile,setIsMobile] = useState(false)
const [isBack,setIsBack] = useState(false)
const [isDesk,setIsDesk] = useState(false)

const dispatch = useDispatch()

const saveFilters = useCallback( () =>{
    const appliedFilters = {
        front:isFront,
        mobile:isMobile,
        back:isBack,
        desk:isDesk
    }
    dispatch(setFilters(appliedFilters))
},[isFront,isMobile,isBack,isDesk,dispatch]
) 


useEffect (()=>{
    navigation.setParams({save:saveFilters})
},[saveFilters])

    return (
        <View style={styles.screen} >
            <Text style={styles.title}>Available Filters</Text>
            <FilterComponent
                title='Frontend'
                value={isFront}
                onChange={newValue => setIsFront(newValue)}
            />
            <FilterComponent
                title='Mobile'
                value={isMobile}
                onChange={newValue => setIsMobile(newValue)}
            />
            <FilterComponent
                title='Backend'
                value={isBack}
                onChange={newValue => setIsBack(newValue)}
            />
            <FilterComponent
                title='Desktop'
                value={isDesk}
                onChange={newValue => setIsDesk(newValue)}
            />
        </View>
    )
}

export const filtersOptions = navData => {
    return {  
        headerTitle : 'Filtered Techs',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHButon} >
            <Item
                iconName='menu'
                onPress={()=>{
                navData.navigation.toggleDrawer()
                }}
            />
        </HeaderButtons>,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHButon} >
        <Item
            name='Save'
            iconName='ios-save'
            onPress={
                navData.route.params.save
            }
        />
    </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center'
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:22,
        margin:20,
        textAlign:'center'
    },
    filterContainer:{
        marginVertical:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'80%'
    }
})

export default FiltersScreen