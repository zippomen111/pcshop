import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface FetchItemsParams {
    category: string;
    search: string;
    sort: string;
}

interface ItemState {
    items: any[];
    status: 'loading' | 'success' | 'error';
}

const initialState: ItemState = {
    items: [],
    status: 'loading',
};

export const fetchItemsSlice = createAsyncThunk('item/fetchItems', async ({ category, search, sort }: FetchItemsParams) => {
    const { data } = await axios.get(`https://62fbd962abd610251c12510e.mockapi.io/PC_Items?${category}&sortBy=${sort}${search}`);
    return data;
});

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        setItem: (state, action: PayloadAction<any[]>) => {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchItemsSlice.pending, (state) => {
            state.status = 'loading';
            state.items = [];
        });
        builder.addCase(fetchItemsSlice.fulfilled, (state, { payload }) => {
            state.items = payload;
            state.status = 'success';
        });
        builder.addCase(fetchItemsSlice.rejected, (state) => {
            state.status = 'error';
            state.items = [];
        });
    },
});

// Action creators are generated for each case reducer function
export const { setItem } = itemSlice.actions;

export default itemSlice.reducer;