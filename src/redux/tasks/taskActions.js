import { addTask, deleteTask, toggleReminder } from "./tasksSlice";

export const addTaskAction = (task) => (dispatch) => {
  dispatch(addTask(task));
};

export const deleteTaskAction = (id) => (dispatch) => {
  dispatch(deleteTask(id));
};

export const toggleReminderAction = (id) => (dispatch) => {
  dispatch(toggleReminder(id));
};
