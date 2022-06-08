import { configureStore } from "@reduxjs/toolkit";
import StoryReducer from "./storySlice";

const store = configureStore({
    reducer: {
        stories: StoryReducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;