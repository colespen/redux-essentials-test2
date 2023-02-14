import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: '', title: '', content: '', date: '' },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // action is {type: '.../...', payload: 0}
    postAdded: {
      //  case reducer function
      reducer: (state, action) => {
        state.push(action.payload);
      },
      // prepare callback function
      prepare: (title, content, userId, date) => {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId
          }
        };
      }
    },
    postUpdated: (state, action) => {
      const { id, title, content } = action.payload;
      const existingPost = state.find(post => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    }
  }
});

export const { postAdded, postUpdated } = postsSlice.actions;
export default postsSlice.reducer;