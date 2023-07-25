import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import { useDispatch } from "react-redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true,
});

let persistor = persistStore(store);
export { store, persistor };


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export default store;
