import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productsApi";

const productsSlice = createSlice({
  name: "products",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default productsSlice.reducer;
