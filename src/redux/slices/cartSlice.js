import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalPrice: 0,
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price + sum;
            }, 0)

        },
        removeItem: (state, action) => {
            state.items = state.items.filter(obj => obj.id !== action.payload);
        },
        changePrice: (state, action) => {
            state.totalPrice = state.totalPrice - action.payload;
        },
        clearItems: (state) => {
            state.items = [];
            state.totalPrice = 0;

        },
    },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearItems, changePrice } = cartSlice.actions

export default cartSlice.reducer