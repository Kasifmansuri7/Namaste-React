import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const foundItem = state.items.find(
        (item) => item.info.id === action.payload.info.id
      );

      if (foundItem) {
        foundItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const foundItem = state.items.find((item) => {
        return item.info.id === action.payload.info.id;
      });
      if (foundItem.quantity > 1) {
        foundItem.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.info.id != action.payload.info.id
        );
      }
    },
    clearItem: (state) => {
      // RTK either mutate the state or return the new state
      // return { items: [] };
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
