import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchItemsSlice = createAsyncThunk(
    'item/fetchItems',
    async ({ category, search, sort }) => {
        const { data } = await axios.get(`https://62fbd962abd610251c12510e.mockapi.io/PC_Items?${category}&sortBy=${sort}${search}`)
        return data
    }
)
const initialState = {
    items: [],
    status: 'loading' // loading | success | error
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        setItem: (state, action) => {
            state.items = action.payload

        },
    },
    extraReducers: {
        [fetchItemsSlice.pending]: (state) => {
            state.status = 'loading'
            state.items = []
        },
        [fetchItemsSlice.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = 'success'
        },
        [fetchItemsSlice.rejected]: (state) => {
            state.status = 'error'
            state.items = []
        },
    }

})

// Action creators are generated for each case reducer function
export const { setItem } = itemSlice.actions

export default itemSlice.reducer