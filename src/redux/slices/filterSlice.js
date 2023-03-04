import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    sort: 'title',
    searchValue: '',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.categoryId = action.payload
        },
        setSort: (state, action) => {
            state.sort = action.payload
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        setFilter: (state, action) => {
            state.categoryId = Number(action.payload.category);
            state.sort = action.payload.sortBy;
            state.searchValue = String(action.payload.search);
        }
    },
})

// Action creators are generated for each case reducer function
export const { setCategory, setSort, setSearchValue, setFilter } = filterSlice.actions

export default filterSlice.reducer