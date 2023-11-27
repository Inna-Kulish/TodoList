import { createSlice } from "@reduxjs/toolkit";
import { getTasks } from "./operations";

const initialState = {
    items: [],
}

const handleFulfilledGet = (state, action) => {
    state.items = [...state.items, ...action.payload];
}

const handleRejected = (state, action) => {
    console.log(action);
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getTasks.fulfilled, handleFulfilledGet)
        .addCase(getTasks.rejected, handleRejected)
    }
})

export const tasksReducer = tasksSlice.reducer;