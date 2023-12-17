import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
                {showAddTask && <AddTask />}
                {tasks.length > 0 ? <Tasks /> : "No Tasks To Show"}
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
