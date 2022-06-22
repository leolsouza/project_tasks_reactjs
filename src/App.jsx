import { Route, Routes } from "react-router-dom";

import Page from "./components/Page";
import TaskDetails from "./components/TaskDetails";

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Page />} /> 
        <Route path='/:taskTitle' element={<TaskDetails />} />
    </Routes>
  );
};

export default App;
