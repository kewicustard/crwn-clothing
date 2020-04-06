import CartActionTypes from './cart.types';

const INITISL_STATE = {
    hidden: true
}

const cartReducer = (state = INITISL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };    
        default:
            return state;
    }
}

export default cartReducer;