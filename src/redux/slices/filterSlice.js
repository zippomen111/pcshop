import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.categoryId = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setCategory } = filterSlice.actions

export default filterSlice.reducer