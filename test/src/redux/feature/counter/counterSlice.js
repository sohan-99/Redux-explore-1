import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value: 0,
}

const counterSlice = createSlice({
   name: 'counter',
   initialState,
   reducers: {
      increment: (state) => {
         state.value = state.value + 1;
      },
      decrement: (state) => {
         state.value = state.value - 1;
      },
      // second comon mistacke second  reducer you create but not export it not woek properly
      
      incrimentByVslue : (state, action) =>{
         state.value = state.value + action.payload;
      }
   }
});

export const {increment, decrement,incrimentByVslue} =counterSlice.actions;
export default counterSlice.reducer;