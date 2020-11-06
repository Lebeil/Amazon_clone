export const initialState = {
    basket: ["iphone","mac"]
};

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //add
            break;
        case 'REMOVE_FROM_BASKET':
            //removing
            break;
        default:
            return state;
    }
}

export default reducer;
