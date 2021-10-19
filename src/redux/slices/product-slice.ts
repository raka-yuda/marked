// import { Product } from "./../../types/product";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { client } from "../../helpers/api/client";

const path = "products";
const url = "https://fakestoreapi.com/" + path;

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface ProductsState {
  products: Product[];
  product: Product | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: any;
}

const initialState = {
  products: [],
  product: null,
  status: "idle",
  error: null,
} as ProductsState;

export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    const response = await client.get(url);
    return response as Product[];
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selectOneProduct(state, action) {
      const payload = action.payload;
      state.product = {
        ...state.product,
        ...payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
        console.log("loading");
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, { payload }: PayloadAction<Product[]>) => {
          state.status = "succeeded";
          state.products = [...payload];
          console.log(payload);
          console.log("succeeded");
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        console.log("failed");
        state.error = action.payload;
      });
  },
});

export const { selectOneProduct } = productsSlice.actions;

export default productsSlice.reducer;
