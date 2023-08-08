export const reducer = (state , action) => {
    switch(action.type){
        case "getProducts":
            return {...state , products: action.payload}
            case "ADD_TO_CART":
                // return {...state , cart: [...state.cart , {...action.payload}]}
                const isExisted = state.cart.find(product => product.id === action.payload.id)
                if(isExisted){
                    return {...state}
                }else{
                    return {...state , cart: [...state.cart , {...action.payload}]}
                }
            case "REMOVE-FROM-CART":
                return {...state , cart: state.cart.filter(product => product.id !== action.payload.id)}
            case "CLEAR-CART":
                return {...state , cart: state.cart = []}
        default:
            return state
    }
}
