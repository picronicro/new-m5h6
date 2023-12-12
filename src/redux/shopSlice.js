import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const response = await axios("https://dummyjson.com/products")
        return response.data
    }

)

const shopSlice = createSlice({
    name: "products",
    initialState: {
        status: {
            isLoading: false,
            error: null
        },
        products: [],
        cart: []
    },
    reducers: {
        addItem: (state, action) => {
            state.cart.push(action.payload)
        },
        removeItem: (state, action) => {
            const index = state.cart.findIndex(item => item.id === action.payload.id)
            if (index > -1) {
                state.cart.splice(index, 1)
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status.error = null
            state.status.isLoading = true
        })

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status.isLoading = false
            state.products = action.payload.products
        })

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status.isLoading = false
            state.status.error = action.error.message
        })
    }
})

export const shopActions = shopSlice.actions
export const shopReducer = shopSlice.reducer