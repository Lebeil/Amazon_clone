export const initialState = {
    basket: [],
};

//selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amont, item)=> item.price + amont, 0);

const Reducer = (state, action) => {
    /*console.log(action);*/
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            return {state};
        default:
            return state;
    }
};

export default Reducer;
