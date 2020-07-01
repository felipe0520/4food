const initialState = []


const restaurants = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_RESTAURANTS':
            return state = action.payload
            
        default:
            return state
    } 
}

export default restaurants
