import {configureStore} from "@reduxjs/toolkit";
import dataReducer from './redux.reducer';
import {placeholderApi} from './api.reducer.js';

export const store = configureStore({
    reducer: {
        [placeholderApi.reducerPath]: placeholderApi.reducer,
        data: dataReducer,
    },
    // preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(placeholderApi.middleware),
});

export const RootState = store.dispatch;

export default store;