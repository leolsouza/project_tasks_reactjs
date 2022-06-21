import './TaskItem.css';

const TaskItem = ({task}) => {
    return <div className='task-container'>{task.title}</div>; 
};
 
export default TaskItem;