import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface UserItem {
    name: string
}

const initialState: UserItem ={
    name:"vann",
};

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        newName: (state, action: PayloadAction<string>) =>{
            state.name= action.payload
        }
    }
})
export const {newName} = userSlice.actions;
export default userSlice.reducer;