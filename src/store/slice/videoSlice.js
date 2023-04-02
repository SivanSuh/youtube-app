import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import youtube from "../../api/youtube";

const initialState = {
  videoList: [],
  videoSelect: null,
};

export const fetchVideo = createAsyncThunk("video", async (video) => {
  const response = await youtube.get("/search", {
    params: {
      q: video,
    },
  });
  return response.data;
});
const videoSlice = createSlice({
  name: "video Slice",
  initialState,
  reducers: {
    onSelectVideoItem: (state, action) => {
      state.videoSelect = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVideo.fulfilled, (state, action) => {
      state.videoList = action.payload;
    });
  },
});

export const { onSelectVideoItem } = videoSlice.actions;

export default videoSlice.reducer;
