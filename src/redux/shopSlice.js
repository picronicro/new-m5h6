import {createSlice} from "@reduxjs/toolkit";
import products from "../products.json";

const shopSlice = createSlice({
    name: "products",
    initialState: {
        products,
        cart: []
    },
    reducers: {
        addItem: (state, action) => {
            state.cart.push(action.payload)
        },
        removeItem: (state, action) => {
            const index = state.cart.findIndex(item => item._id === action.payload._id)
            if (index > -1) {
                state.cart.splice(index, 1)
            }
        }
    }
})

export const shopActions = shopSlice.actions
export const shopReducer = shopSlice.reducer