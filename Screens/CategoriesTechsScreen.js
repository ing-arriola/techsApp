import React from 'react'
import { useSelector } from 'react-redux'
import TechList from '../components/TechList'

const CategoriesTechsScreen = (props) => {
    const itemPassed=props.route.params.item
    const availableTechs = useSelector(state => state.techs.filteredTechs)
    const techsToDisplay =  availableTechs.filter(tech => tech.category.indexOf(itemPassed.id)>=0)

    return (
        <TechList 
        techsToDisplay={techsToDisplay}
        navigation={props.navigation}
        />
    )
}

CategoriesTechsScreen.navigationOptions = navigationData => { 
    const itemPassed=navigationData.navigation.getParam('item')
    return {
        headerTitle : itemPassed.title,
    }
}

export default CategoriesTechsScreen

/*
<Text>
            CategoriesTechsScreen
            </Text>
            <Button title='Go to techDetail!' onPress={()=>{
                props.navigation.navigate({
                    routeName : 'TechDetail'
                })
            }}  />
            <Text>
                {itemPassed.title}
            </Text>

*/