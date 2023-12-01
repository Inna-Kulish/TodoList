import { createSlice } from "@reduxjs/toolkit";
import {
  deleteTask,
  getTasks,
  addTask,
  toggleCompleted,
  editTitle,
  getAllTasks,
} from "./operations";

const initialState = {
  allTasks: [],
  items: [],
  totalPage: 1,
};

const handleFulfilledGetAll = (state, action) => {
  state.allTasks = action.payload;
  state.totalPage = Math.ceil(action.payload.length/9);
};

const handleFulfilledGet = (state, action) => {
  state.items = action.payload;
};

const handleFulfilledPost = (state, action) => {
  state.items.push(action.payload);
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
      .addCase(getAllTasks.fulfilled, handleFulfilledGetAll)
      .addCase(getAllTasks.rejected, handleRejected)
      .addCase(getTasks.fulfilled, handleFulfilledGet)
      .addCase(getTasks.rejected, handleRejected)
      .addCase(addTask.fulfilled, handleFulfilledPost)
      .addCase(addTask.rejected, handleRejected)
      .addCase(toggleCompleted.fulfilled, handleFulfilledPut)
      .addCase(toggleCompleted.rejected, handleRejected)
      .addCase(editTitle.fulfilled, handleFulfilledPut)
      .addCase(editTitle.rejected, handleRejected)
      .addCase(deleteTask.fulfilled, handleFulfilledDelete)
      .addCase(deleteTask.rejected, handleRejected);
  },
});

export const tasksReducer = tasksSlice.reducer;
