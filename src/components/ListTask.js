import {useSelector} from "react-redux";
import Task from "./Task"

function ListTask() {
    const arr = useSelector((state) => state.arr);
    return (
      <div>
        <ul>
          {arr.map((el, i) => (
          <Task el={el} key={i} />
          ))}
        </ul>
      </div>
    );
  }
  export default ListTask;