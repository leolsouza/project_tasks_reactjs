import Task from "./TaskItem";

const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task task={task}/>
      ))}
    </div>
  );
};

export default Tasks;