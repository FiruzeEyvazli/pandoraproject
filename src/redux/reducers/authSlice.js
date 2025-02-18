import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// User login
export const loginUser = createAsyncThunk('auth/loginUser', async (userData, { rejectWithValue }) => {
  try {
      const { data } = await axios.post('http://localhost:5000/api/users/login', userData); // Tam URL
      return data;
  } catch (error) {
      return rejectWithValue(error.response.data);
  }
});

// User registration (signup)
export const registerUser = createAsyncThunk('auth/registerUser', async (userData, { rejectWithValue }) => {
  try {
      const { data } = await axios.post('http://localhost:5000/api/users/signup', userData); // Tam URL
      return data;
  } catch (error) {
      return rejectWithValue(error.response.data);
  }
});

// Logout
export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { rejectWithValue }) => {
  try {
      await axios.post('http://localhost:5000/api/users/logout'); // Tam URL
      return null;
  } catch (error) {
      return rejectWithValue(error.response.data);
  }
});


export const getUser = createAsyncThunk('auth/getUser', async (_, { rejectWithValue }) => {
  try {
      const { data } = await axios.get('http://localhost:5000/api/users/getuser'); // Tam URL
      return data;
  } catch (error) {
      return rejectWithValue(error.response.data);
  }
});



const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload;
            });
    },
});

export default authSlice.reducer;
