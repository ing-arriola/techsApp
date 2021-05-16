import {TECHS} from '../../data/data'
import {TOGGLE_FAVORITES} from '../actions/techs'
const initialState = {
    techs:TECHS,
    filteredTechs:TECHS,
    favoritesTechs:[]
}

const techsReducer = (state=initialState,action) => {
    switch(action.type){
        case TOGGLE_FAVORITES:
            const existingIndex = state.favoritesTechs.findIndex(tech => tech.id === action.tech.id)
            console.log(existingIndex)
            if(existingIndex>=0){
                const updatedFavorites = [...state.favoritesTechs]
                updatedFavorites.splice(existingIndex,1)
                return {...state,favoritesTechs:updatedFavorites}
            }
            else{
                return {...state,favoritesTechs:[...state.favoritesTechs,action.tech]}
            }
    }
    return state
}

export default techsReducer