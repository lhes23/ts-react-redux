import { createSlice } from "@reduxjs/toolkit";

export interface Product {
    id: number;
    name: string;
    price: number;
    qty: number;
  }
  
  const initialState = { 
    products : [
        { id: 1, name: "banana", price: 30, qty: 1 },
        { id: 2, name: "apple", price: 30, qty: 1 },
        { id: 3, name: "grapes", price: 30, qty: 1 },
    ],
    filterProd:''
};

export const ProductSlice = createSlice({
    name:'ProductSlice',
    initialState,
    reducers:{
        setFilter:(state,action) => {
            state.filterProd = action.payload
        }
    }
}) 

export const {setFilter} = ProductSlice.actions

export default ProductSlice.reducer