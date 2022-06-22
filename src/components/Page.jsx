import AddTask from "./AddTask";
import Header from "./Header";
import Tasks from "./Tasks";

import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Page.css";

const Page = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      
      const { data } = await axios.get("http://127.0.0.1:8000/api/tasks");
      
      setTasks(data);
    };

    fetchTasks();
    
  }, []);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (inputData) => {
    const newTasks = [
      ...tasks,
      {
        title: inputData,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <Header />
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks
        tasks={tasks}
        handleTaskClick={handleTaskClick}
        handleTaskDeletion={handleTaskDeletion}
      />
    </div>
  );
};

export default Page;
