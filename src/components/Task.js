import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  deleteTaskAction,
  toggleReminderAction,
} from "../redux/tasks/taskActions";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const deleteTaskById = (id) => {
    dispatch(deleteTaskAction(id));
  };

  const toggleReminderById = (id) => {
    dispatch(toggleReminderAction(id));
  };
  return (
    <div
      className={`task ${task.reminder && "reminder"}`}
      onDoubleClick={() => toggleReminderById(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => deleteTaskById(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
