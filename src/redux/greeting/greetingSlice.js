import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  isLoading: false,
};

const APIBase = 'http://127.0.0.1:3001/api/v1/greetings';

export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  try {
    const response = await fetch(APIBase);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchGreeting.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        message: action.payload.greeting,
      }))
      .addCase(fetchGreeting.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default greetingSlice.reducer;
