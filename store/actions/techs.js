export const TOGGLE_FAVORITES ='TOGGLE_FAVORITES'

export const toogleFavorites = (item) => {
    return {
        type:TOGGLE_FAVORITES,
        tech:item
    }
}