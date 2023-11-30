import { createSlice } from "@reduxjs/toolkit";
import { deleteTask, getTasks, toggleCompleted, editTitle } from "./operations";

const initialState = {
  items: [],
};

const handleFulfilledGet = (state, action) => {
  state.items = [...state.items, ...action.payload];
};

const handleFulfilledPut = (state, action) => {
  const index = state.items.findIndex((task) => task.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
};

const handleFulfilledDelete = (state, action) => {
  const index = state.items.findIndex((task) => task.id === action.payload);
  state.items.splice(index, 1);
};

const handleRejected = (state, action) => {
  console.log(action);
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.fulfilled, handleFulfilledGet)
      .addCase(getTasks.rejected, handleRejected)
      .addCase(toggleCompleted.fulfilled, handleFulfilledPut)
        .addCase(toggleCompleted.rejected, handleRejected)
        .addCase(editTitle.fulfilled, handleFulfilledPut)
        .addCase(editTitle.rejected, handleRejected)
      .addCase(deleteTask.fulfilled, handleFulfilledDelete)
      .addCase(deleteTask.rejected, handleRejected);
  },
});

export const tasksReducer = tasksSlice.reducer;
