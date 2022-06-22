import { useNavigate, useParams } from "react-router-dom";


import Button from "./Button";
import Header from "./Header";

import "./Page.css";
import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();  
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  }
  

  return (
    <div className="container">
      <Header />
      <div className="back-button-container">
        <Button onClick={handleBackButton}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsam
          porro dignissimos magni incidunt ut?
        </p>
      </div>
    </div>
  );
};

export default TaskDetails;
