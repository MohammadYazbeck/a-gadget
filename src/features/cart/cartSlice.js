import { createSlice } from '@reduxjs/toolkit'

const loadCartFromStorage = () => {
    try {
        const serializedCart = sessionStorage.getItem('cart')
        return serializedCart ? JSON.parse(serializedCart) : []
    } catch (error) {
        console.error('Could not load cart from storage:', error)
        return []
    }
}

const saveCartToStorage = (cart) => {
    try {
        const serializedCart = JSON.stringify(cart)
        sessionStorage.setItem('cart', serializedCart)
    } catch (error) {
        console.error('Could not save cart to storage:', error)
    }
}

const initialState = {
    cart: loadCartFromStorage(),
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            // payload = newItem
            state.cart.push(action.payload)
            saveCartToStorage(state.cart)
        },
        deleteItem(state, action) {
            // payload = itemId
            state.cart = state.cart.filter((item) => item.id !== action.payload)
            saveCartToStorage(state.cart)
        },
        increaseItemQuantity(state, action) {
            // payload = itemId
            const item = state.cart.find((item) => item.id === action.payload)

            item.quantity++
            saveCartToStorage(state.cart)
        },
        decreaseItemQuantity(state, action) {
            // payload = itemId
            const item = state.cart.find((item) => item.id === action.payload)
            if (item.quantity === 0) {
                cartSlice.caseReducers.deleteItem(state, action)
                saveCartToStorage(state.cart)
            }
            item.quantity--
            saveCartToStorage(state.cart)
        },
        clearCart(state) {
            state.cart = []
            saveCartToStorage(state.cart)
        },
    },
})

export const getCart = (state) => state.cart.cart

export const isItemInCart = (itemId) => (state) =>
    state.cart.cart.find((item) => itemId === item.id) ? true : false

export const getItemQuantity = (itemId) => (state) =>
    state.cart.cart.find((item) => item.id === itemId)?.quantity

export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity * item.price, 0)

export const getTotalCartQuantity = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)

export const getTotalCartItems = (state) =>
    state.cart.cart.reduce((sum) => sum + 1, 0)

export const {
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
} = cartSlice.actions

export default cartSlice.reducer
