import "./App.css";
import Addtask from "./components/Addtask";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListTask from "./components/ListTask";

export default function App() {
  return (
    <div className="App">
      <div className="back">
      <Addtask />
      <ListTask />
    </div>
    </div>
    
  );
}
