import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        setItem: (state, action) => {
            state.items = action.payload

        },
    },
})

// Action creators are generated for each case reducer function
export const { setItem } = itemSlice.actions

export default itemSlice.reducer