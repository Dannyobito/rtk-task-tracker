import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    toggleReminder: (state, action) => {
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, reminder: !task.reminder }
          : task
      );
    },
  },
});

export const { addTask, deleteTask, toggleReminder } = tasksSlice.actions;
export default tasksSlice.reducer;
