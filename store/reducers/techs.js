import {TECHS} from '../../data/data'
const initialState = {
    techs:TECHS,
    filteredTechs:TECHS,
    favoritesTechs:[]
}

const techsReducer = (state=initialState,action) => {
    return state
}

export default techsReducer