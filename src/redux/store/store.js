import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

// Import your slices here
import authSlice from "../features/auth/authSlice";
import userSlice from "../features/user/userSlice";
import chatSlice from "../features/chat/chatSlice";
import currentUserSlice from "../features/currentUser/currentuserSlice";
// import projectSlice from '../features/project/projectSlice';

// Root reducer
const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
  chat: chatSlice,
  currentUser: currentUserSlice,
  // project: projectSlice,
});

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "user", "chat", "currentUser"], // Only persist these reducers
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

// Export store types for use in components
export const getState = store.getState;
export const dispatch = store.dispatch;
