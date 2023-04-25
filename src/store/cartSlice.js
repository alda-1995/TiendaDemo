import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem(state, action){
            const newItem = { ...action.payload, cantidad: 1 }
            const existItem = state.items.find(item => item.id === newItem.id);
            if(existItem){
                existItem.cantidad += 1;
            }else{
                state.items.push(newItem);
            }
        },
        removeItem(state, action){
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
        },
        updateItemQuantity(state, action){
            const { id, quantity } = action.payload;
            const existItem = state.items.find(c => c.id === id);
            if(existItem)
                existItem.cantidad = quantity;
        }
    }
});

export const { addItem, removeItem, updateItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;