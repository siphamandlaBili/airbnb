import { createSlice } from '@reduxjs/toolkit';


let initialState = {
    name:"siphamandla",
    surname:"bili"
}

export const todoSlice = createSlice(
    {
  name: 'todos',
  initialState: initialState,

  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload)
  },}
});

// this is for dispatch
export const { addTodo } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;