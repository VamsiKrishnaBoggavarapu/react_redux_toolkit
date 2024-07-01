import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    loading: false,
  },

  reducers: {
    showLoader: (state) => {
      state.loading = true;
    },
    stopLoader: (state) => {
      state.loading = false;
    },
  },
});

export const { showLoader, stopLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
