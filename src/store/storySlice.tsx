import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Story } from "../models/story.model";

interface InitialState{
    stories: Story[] 
}

const initialState: InitialState = {stories:[]}

const storySlice = createSlice({
    name: "storySlice",
    initialState: initialState,
    reducers: {
        addStory(state, action: PayloadAction<Story>) {
            state.stories.push(action.payload);
        },
        fillStory(state) {
            state.stories = new Array(10).fill({
                "id": Date.now(),
                "headline": `This was a good Start`,
                "shortDesc": "Testing the app for problems",
                "longDesc": " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore tenetur tempora error perspiciatis voluptate doloremque sint dolore temporibus suscipit recusandae",
                "dateCreated": new Date().toDateString(),
            }
            );
        }
    }
});

const storyReducer = storySlice.reducer;
export default storyReducer;

export const storyActions = storySlice.actions;
