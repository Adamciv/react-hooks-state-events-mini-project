import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCat,setSelectedCat] = useState('All')

  const handleDelete = (taskToDelete) => {
    setTasks(tasks.filter((task) => task.text !== taskToDelete));
  };

  const handleCat = (selectedCat) => {
    setSelectedCat(selectedCat)
  }

  const handleaddtask = (newTask)=>{
    setTasks([...tasks, newTask])
  }

  
  const renderedTasks = selectedCat === "All"? tasks : tasks.filter(task => task.category === selectedCat)


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCat={handleCat} />
      <NewTaskForm categories={CATEGORIES.filter(category => category !== "All")}  onTaskFormSubmit={handleaddtask}  />
      <TaskList tasks={renderedTasks} selectedCat={selectedCat} handleDelete={handleDelete} />

      {/* {tasks.map((task) => (
        <div>
          <div>{task.text}</div>
          <div>{task.category}</div>
          <button onClick={()=>handleDelete(task.text)}>remove</button>
        </div>
      ))} */}

    </div>
  );
}

export default App;
