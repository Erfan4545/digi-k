import * as actions from './actionTypes'

let lastId = 0;

export default function reducer(state = [], action) {

    if (action.type === actions.PRODUCT_ADDED)
        return [
            ...state,
            {
                id: ++lastId,
                productId: action.payload.productId,
                amount: 1
            }
        ];
    else if (action.type === actions.PRODUCT_REMOVED)
        return state.filter(product => product.productId !== action.payload.productId)

    else if (action.type === actions.PRODUCT_INCREMENTED)
        return state.map(product => product.productId !== action.payload.productId ? product : {...product, amount: product.amount + 1 })

    else if (action.type === actions.PRODUCT_REDUCTED)
        return state.map(product => product.productId !== action.payload.productId ? product : {...product, amount: product.amount - 1 })




    return state;
}