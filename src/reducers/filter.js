const initialState = {

    filteredRestaurants: [],
    inputSearch: ""

}

const filterSearch = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_FILTERED_RESTAURANTS':
            return {
                ...state,
                filteredRestaurants: action.payload.restaurants
            }

        case "SET_INPUT_SEARCH":
            return {
                ...state,
                inputSearch: action.payload.inputData
            }

        default:
            return state
    }
}

export default filterSearch