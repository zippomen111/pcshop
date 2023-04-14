import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlice'
import cartReducer from './slices/cartSlice'
import itemReducer from './slices/itemSlice'
export const store = configureStore({
    reducer: {
        filter: filterReducer,
        cart: cartReducer,
        item: itemReducer,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch