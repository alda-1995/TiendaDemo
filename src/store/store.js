import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from './cartSlice';
import storage from 'redux-persist/lib/storage';
import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
    reducer: {
      productos: productReducer,
      cart: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);