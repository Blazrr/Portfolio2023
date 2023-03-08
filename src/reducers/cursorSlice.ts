import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";



export interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: "default",
  
};


export const cursorSlice = createSlice({
  name: "cursor",
  initialState,
  reducers: {

    changeCursor: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }

  },
});

// Action creators are generated for each case reducer function
export const { changeCursor } = cursorSlice.actions;

export default cursorSlice.reducer;