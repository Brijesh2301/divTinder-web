import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => action.payload,
    removeUserFromFeed: (state, action) => {
      // Fix: Remove 'action' from state.action and use _id instead of id
      const newFeed = state.filter(user => user._id !== action.payload);
      return newFeed;
    },
  },     
})

export const { addFeed, removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer;