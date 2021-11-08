import {useSelector} from "react-redux";
import Task from "./Task";



function filterTodos(todoList, filterQuery) {
  
  switch (filterQuery) {
    case "done":
      return todoList.filter((todo) => todo.isDone === true);
    case "undone":
      return todoList.filter((todo) => todo.isDone === false);
    case "no-filter":
    default:
      return todoList;
  }
}

const ListTask=() =>{
  const todoList = useSelector((state) => state.arr);
  const filterQuery= useSelector((state) => state.FilterTask)
  
  const result = filterTodos(todoList, filterQuery);
    return (
      <div>
        <ul>
          {result.map((el, i) => (
          <Task el={el} key={i} />
          ))}
        </ul>
      </div>
    );
  }
  
export default ListTask;