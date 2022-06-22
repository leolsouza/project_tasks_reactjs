import { Route, Routes } from "react-router-dom";

import Page from "./components/Page";
import TaskDetails from "./components/TaskDetails";

const App = () => {
  return (
    <Routes>
        <Route path='/tasks' element={<Page />} /> 
        <Route path='/tasks/:id' element={<TaskDetails />} />
    </Routes>
  );
};

export default App;
