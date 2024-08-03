import './App.css';
import Homepage from './Homepage';
import GetToDo from './GetToDo';
import InsertToDo from './InsertToDo';
import { BrowserRouter, Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
     
      <Homepage></Homepage>
      <Routes>
      <Route path="GetToDo" element={<GetToDo/>} ></Route>
      <Route path="InsertToDo" element={<InsertToDo/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
