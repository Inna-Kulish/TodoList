import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/todos'

//Get tasks
export const getTasks = createAsyncThunk(
    'todos/getTasks',
    async (page, thunkAPI) => {
        try {
            const result = await axios.get('/', {
                params: {
                    _page: 1,
                    _limit: 9,
                },
            });
            console.log(result.data)
            return result.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);