import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { DeleteHandler, DoneHandler } from "../redux/actions";
import Edit from "./Edit"
function Task({ el }) {
  const dispatch = useDispatch();

  return (
    <div className="todos">
        <li>
        <p style={el.isDone ? { textDecoration: "line-through" } : {}}>
        {el.description}
      </p>
      </li>
      <div className="two-buttons">
        <Button
          onClick={() => {
            dispatch(DoneHandler(el.id));
          }}
        >
          Done
        </Button>
        <Button
          onClick={() => {
            dispatch(DeleteHandler(el.id));
          }}
        >
          Delete
        </Button>
        <Edit  oldTask={ el }/>
      </div>
        
    </div>
  );
}
export default Task;