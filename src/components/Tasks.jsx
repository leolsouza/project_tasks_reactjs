import TaskItem from "./TaskItem";

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
    </div>
  );
};

export default Tasks;
