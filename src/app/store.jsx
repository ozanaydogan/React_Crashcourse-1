import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../feature/posts/PostsSlice'
import usersReducer from '../feature/users/usersSlice'

export const store = configureStore({
  reducer: {
  },
})
