import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  deleteTask,
  getTasks,
  addTask,
  toggleCompleted,
  editTitle,
  getAllTasks,
} from './operations';

const initialState = {
  allTasks: [],
  items: [],
  totalPage: 1,
  currentPage: 1,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilledGetAll = (state, action) => {
  state.allTasks = action.payload;
  state.totalPage = Math.ceil(action.payload.length / 6);
};

const handleFulfilledGet = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
  state.error = null;
};

const handleFulfilledPost = (state, action) => {
  state.isLoading = false;
  state.items.push(action.payload);
  state.error = null;
};

const handleFulfilledPut = (state, action) => {
  state.isLoading = false;
  const index = state.items.findIndex((task) => task.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
  state.error = null;
};

const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  const index = state.items.findIndex((task) => task.id === action.payload);
  state.items.splice(index, 1);
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, handlePending)
      .addCase(getAllTasks.fulfilled, handleFulfilledGetAll)
      .addCase(getTasks.fulfilled, handleFulfilledGet)
      .addCase(addTask.fulfilled, handleFulfilledPost)
      .addCase(toggleCompleted.fulfilled, handleFulfilledPut)
      .addCase(editTitle.fulfilled, handleFulfilledPut)
      .addCase(deleteTask.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAnyOf(
          getAllTasks.rejected,
          getTasks.rejected,
          addTask.rejected,
          toggleCompleted.rejected,
          editTitle.rejected,
          deleteTask.rejected,
        ),
        handleRejected,
      );
  },
});

export const tasksReducer = tasksSlice.reducer;
export const {
   setCurrentPage,
} = tasksSlice.actions;
