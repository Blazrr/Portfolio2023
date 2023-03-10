import { configureStore } from "@reduxjs/toolkit";
import cursorReducer from "./cursorSlice";
import hoveredDivReducer from "./hoveredDiv";

export const store = configureStore({
  reducer: {
    cursor: cursorReducer,
    hoveredDiv: hoveredDivReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;