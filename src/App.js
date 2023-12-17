import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  // Fetch Task
  const fetchTask = (id) => {
    const data = tasks.filter((task) => task.id === id);

    return data[0];
  };

  // Add Task
  const addTask = (task) => {
    const newTaskId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = { ...task, id: newTaskId };

    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    const taskToToggle = fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const newTasks = tasks.map((task) =>
      task.id === taskToToggle.id ? updTask : task
    );
    setTasks(newTasks);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No Tasks To Show"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
