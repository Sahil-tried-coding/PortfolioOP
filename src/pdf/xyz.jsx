// We need to use something from Redux Toolkit, so we import it.
import { createSlice } from '@reduxjs/toolkit';

// Here we are making a special section (slice) on our whiteboard for homework.
const homeworkSlice = createSlice({
  name: 'homework', // This is the name of our section on the whiteboard.
  initialState: [], // This is the starting state, an empty list because we have no homework yet.
  reducers: { // These are the rules for how we can change our homework section.
    addHomework: (state, action) => {
      // When we add homework, we take the homework info (action.payload) and add it to our list.
      state.push(action.payload);
    },
    removeHomework: (state, action) => {
      // When we remove homework, we find it by its id and take it out of our list.
      return state.filter(homework => homework.id !== action.payload);
    },
  },
});

// These are the actions (messages) we can use to change our homework section.
export const { addHomework, removeHomework } = homeworkSlice.actions;
// This is the special section we made, ready to be used.
export default homeworkSlice.reducer;
