import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import Button from "./Button";
import Header from "./Header";

import "./Page.css";
import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();  
  const navigate = useNavigate();

  const [task, setTask] = useState({});

  useEffect(() => {
    const fetchTask = async () => {
      
      const { data } = await axios.get(`http://127.0.0.1:8000/api/tasks/${params.id}`);
      
      setTask(data);
    };

    fetchTask();
    
  }, [params]);

  return (
    <div className="container">
      <Header />
      <div className="back-button-container">
        <Button onClick={()=>navigate(-1)}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{task.title}</h2>
        <p>
          {task.description}
        </p>
      </div>
    </div>
  );
};

export default TaskDetails;
