import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { GetUserById } from "../../services/UserServices";


const initialState = {
    user: null,
    status: 'idle',
    error: null
}

export const fetchUser = createAsyncThunk('user/fetchUser', GetUserById())
const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                return action.payload
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default usersSlice.reducer