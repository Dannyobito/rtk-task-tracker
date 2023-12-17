import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";
import { useSelector } from "react-redux";

const App = () => {
  const tasks = useSelector((state) => state.tasks);
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask />}
      {tasks.length > 0 ? <Tasks /> : "No Tasks To Show"}
      <About />
      <Footer />
    </div>
  );
};

export default App;
