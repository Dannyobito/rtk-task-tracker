import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import tasksReducer from "../redux/tasks/tasksSlice";
import persistConfig from "./persistConfig";

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
