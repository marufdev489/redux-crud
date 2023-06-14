import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//api post method
export const createUser = createAsyncThunk("createUser", async(data)=>{
    const response = await fetch("https://648970fe5fa58521caaf99b7.mockapi.io/user-details",{
        method: "POST",
        headers:{
            "Content-Type": "appliation/json",
        },
        body: JSON.stringify(data),
    });
    const result = response.json();
    return result;
});

export const userDetailSlice = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [createUser.pending] : (state)=>{
            state.isLoading = true;
        },
        [createUser.fulfilled] : (state, action)=>{
            state.isLoading = false;
            state.users.push(action.payload);
        },
        [createUser.rejected] : (state, action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        },
    }
}); 

export default userDetailSlice.reducer;