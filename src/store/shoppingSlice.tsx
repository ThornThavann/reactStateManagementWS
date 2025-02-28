import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShoppingItem{
    items:string[];
}

const initialState: ShoppingItem = {
    items: ["MilK", "Bread"],
}

const shoppingSlice = createSlice({
    name: "shopping",
    initialState,
    reducers:{
        addItem:(state, action: PayloadAction<string>) => {
            const newItem: string = action.payload
            state.items.push(newItem)
        },
    },
});

export const {addItem} = shoppingSlice.actions;
export default shoppingSlice.reducer;