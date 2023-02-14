import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: '', title: '', content: '' },
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
      prepare: (title, content) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content
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