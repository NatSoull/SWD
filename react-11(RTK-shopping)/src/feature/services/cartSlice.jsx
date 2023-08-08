/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  quantity: 0,
};

const STORAGE_KEY = "cartItems";

const storedItems = Cookies.get(STORAGE_KEY);

if (storedItems) {
  initialState.cartItems = JSON.parse(storedItems);
  initialState.totalAmount =
    calculateTotalAmount(initialState.cartItems) *
    calculateQuantity(initialState.cartItems);
  initialState.quantity = calculateQuantity(initialState.cartItems);
}

function calculateTotalAmount(cartItems) {
  return cartItems.reduce((total, item) => total + item.price, 0);
}

function calculateQuantity(cartItems) {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isExisted = state.cartItems.find((item) => item.id === payload.id);

      if (isExisted) {
        return state;
      } else {
        state.cartItems = [...state.cartItems, { ...payload, quantity: 1 }];
        state.quantity += calculateQuantity(state.cartItems);
        state.totalAmount += calculateTotalAmount(state.cartItems);
        Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      state.totalAmount =
        calculateTotalAmount(state.cartItems) *
        calculateQuantity(state.cartItems);
      state.quantity = calculateQuantity(state.cartItems);
      Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
    },
    addItemQuantity: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: (item.quantity += 1) };
        } else {
          return item;
        }
      });
      state.quantity = calculateQuantity(state.cartItems);
      state.totalAmount =
        calculateTotalAmount(state.cartItems) *
        calculateQuantity(state.cartItems);
      Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
    },
    subtractItemQuantity: (state, { payload }) => {
      const findItem = state.cartItems.find((item) => item.id === payload.id);

      state.cartItems = state.cartItems.map((item) => {
        if (findItem.quantity > 1) {
          if (item.id === payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            state.quantity = calculateQuantity(state.cartItems);
            state.totalAmount =
              calculateTotalAmount(state.cartItems) *
              calculateQuantity(state.cartItems);
            Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
            return item;
          }
        }
        (state.quantity = calculateQuantity(state.cartItems)),
          (state.totalAmount =
            calculateTotalAmount(state.cartItems) *
            calculateQuantity(state.cartItems)),
          Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems)); //******************************** */
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addItemQuantity,
  subtractItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
