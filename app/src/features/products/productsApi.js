import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const getProducts = createAsyncThunk("/products", async () => {
  const res = await api({ url: "/products" });
  return res.data;
});
