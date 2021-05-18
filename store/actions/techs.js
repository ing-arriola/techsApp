export const TOGGLE_FAVORITES ='TOGGLE_FAVORITES'
export const SET_FILTERS = 'SET_FILTERS'

export const toogleFavorites = (item) => {
    return {
        type:TOGGLE_FAVORITES,
        tech:item
    }
}

export const setFilters = filterSettings => {
    return {type: SET_FILTERS, filters:filterSettings}
}