import {TECHS} from '../../data/data'
import {TOGGLE_FAVORITES,SET_FILTERS} from '../actions/techs'
const initialState = {
    techs:TECHS,
    filteredTechs:TECHS,
    favoritesTechs:[]
}

const techsReducer = (state=initialState,action) => {
    switch(action.type){
        case TOGGLE_FAVORITES:
            const existingIndex = state.favoritesTechs.findIndex(tech => tech.id === action.tech.id)
            if(existingIndex>=0){
                const updatedFavorites = [...state.favoritesTechs]
                updatedFavorites.splice(existingIndex,1)
                return {...state,favoritesTechs:updatedFavorites}
            }
            else{
                return {...state,favoritesTechs: state.favoritesTechs.concat(action.tech)}
            }
        case SET_FILTERS:
            const appliedFilters= action.filters
            const updatedFilters = state.techs.filter(tech => {
                if(appliedFilters.front && !tech.isFront){
                    return false
                }
                if(appliedFilters.mobile && !tech.isMobile){
                    return false
                }
                if(appliedFilters.back && !tech.isBack){
                    return false
                }
                if(appliedFilters.desk && !tech.isDesk){
                    return false
                }
                return true
            })
            return {...state,filteredTechs:updatedFilters}
        default:
            return state
    }
    return state
}

export default techsReducer