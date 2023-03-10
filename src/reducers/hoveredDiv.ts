import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";



export interface CounterState {
  value: boolean;
}

const initialState: CounterState = {
  value: false,
  
};


export const hoveredDivSlice = createSlice({
  name: "hoveredDiv",
  initialState,
  reducers: {

    changeHovered: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    }

  },
});

// Action creators are generated for each case reducer function
export const { changeHovered } = hoveredDivSlice.actions;

export default hoveredDivSlice.reducer;