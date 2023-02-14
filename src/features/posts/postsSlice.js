import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '', title: '', content: '' },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // action is {type: '.../...', payload: 0}
    postAdded: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;