import AddTask from "./AddTask";
import Header from "./Header";
import Tasks from "./Tasks";
import Loading from "./Loading";
import Error from './Error';


import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Page.css";


const Page = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const fetchTasks = async () => {
        try {
          const { data } = await axios.get("http://127.0.0.1:8000/api/tasks");
          setTasks(data);
        } 
        catch {
          setError(true);
        }
        setLoading(false);
      };

      fetchTasks();
    }, 2000);
  }, []);

  const handleTaskClick = (taskId) => {
    axios.get(`http://127.0.0.1:8000/api/tasks/completed/${taskId}`);

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
        description: "Isso é uma descrição teste",
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    axios.delete(`http://127.0.0.1:8000/api/tasks/${taskId}`);

    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      {error && <Error />}
      {!error && <Header /> }
      {!error && <AddTask handleTaskAddition={handleTaskAddition} /> }
      <Tasks
        tasks={tasks}
        handleTaskClick={handleTaskClick}
        handleTaskDeletion={handleTaskDeletion}
      />
      {loading && <Loading />}
    </div>
  );
};

export default Page;
