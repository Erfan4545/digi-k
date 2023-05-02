import * as actions from './actionTypes';

export const productAdded = productId => ({
    type: actions.PRODUCT_ADDED,
    payload: {
        productId: productId,
        number: 1
    }
})

export const productRemoved = productid => ({
    type: actions.PRODUCT_REMOVED,
    payload: {
        productId: productid
    }
})





export const productIncremented = id => ({
    type: actions.PRODUCT_INCREMENTED,
    payload: {
        productId: id
    }
})

export const productReducted = id => ({
    type: actions.PRODUCT_REDUCTED,
    payload: {
        productId: id
    }
})