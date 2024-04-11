import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiPost } from "../services/postsApi";

export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  const res = await apiPost({
    method: "GET",
    url: '/posts'
  });
  return res.data;
});

const initialState = {
  isLoading: false,
  posts: [],
  error: false
}

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload
      }),
      builder.addCase(fetchPosts.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
  }
});

export const postReducer = postSlice.reducer