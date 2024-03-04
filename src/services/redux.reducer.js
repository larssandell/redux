import {createSlice} from "@reduxjs/toolkit";
import {placeholderApi} from "./api.reducer";

const initialState = {
    comments: [],
    posts: [],
    loader: false,
    errors: null,
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        startLoading: state => {
            state.loader = true;
        },
        postsReceived: (state, action) => {
            state.loader = false;
            state.posts = action.payload;
        },
        postsRequestFailed: (state, action) => {
            state.loader = false;
            state.errors = action.payload;
        }
    },
    
    extraReducers: (builder) => {
        builder
            .addMatcher(
                placeholderApi.endpoints.getPosts.matchPending,
                (state) => {
                    state.loader = true;
                }
            )
            .addMatcher(
                placeholderApi.endpoints.getPosts.matchFulfilled,
                (state, action) => {
                    state.loader = false;
                    state.posts = action.payload;
                }
            )
            .addMatcher(
                placeholderApi.endpoints.getPosts.matchRejected,
                (state) => {
                    state.loader = false;
                    state.errors = action.error.message;
                }
            );
    },
    },

);

export const {} = dataSlice.actions;

export default dataSlice.reducer;
