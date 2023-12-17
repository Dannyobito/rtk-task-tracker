import { useSelector } from "react-redux";
import Task from "./Task";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </>
  );
};

export default Tasks;
