
export const initialState = {
    user: null,
    selected: [],
    query: 'iphone',
}


export const actionTypes = {
    SET_USER: "SET_USER",
    SELECTED_PRODUCT: "SELECTED_PRODUCT",
    SELECTED_QUERY: "SELECTED_QUERY",
}

const reducer = (state, action) => {

    switch (action.type) {

        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            }
        case actionTypes.SELECTED_PRODUCT:
            return {
                ...state,
                selected: action.item,
            }
        case actionTypes.SELECTED_QUERY:
            return {
                ...state,
                query: action.query
            }
        default:
            return state;
    }
}

export default reducer