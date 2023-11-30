import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://6555c0c784b36e3a431e3e6b.mockapi.io/todos'

//Get tasks
export const getTasks = createAsyncThunk(
    'todos/getTasks',
    async (page, thunkAPI) => {
        try {
            const result = await axios.get('/', {
                params: {
                    page: 1,
                    limit: 9,
                },
            });
            
            return result.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const toggleCompleted = createAsyncThunk(
  "tasks/toggleCompleted",
  async (task, thunkAPI) => {
    try {
      const result = await axios.put(`/${task.id}`, {
          completed: !task.completed,
      });
      return result.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editTitle = createAsyncThunk(
  "tasks/editTitle",
  async ({id, taskTitle}, thunkAPI) => {
      try {
      const result = await axios.put(`/${id}`, {
          title: taskTitle,
      });
      return result.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, thunkAPI) => {
      try {
        const result = await axios.delete(`/${taskId}`);
      return result.data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);