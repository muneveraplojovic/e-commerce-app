import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  inicialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decreament: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decreament, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
