import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddHandler } from "../redux/actions";
import {Button} from "react-bootstrap"

function Addtask() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const arr = useSelector((state) => state.arr);

  const id = arr.length + 1;

  return (
    <div className="add-section">
      <input
        type="text"
        placeholder="Add to list"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        onClick={() => {
          dispatch(AddHandler({ id, description: input, isDone: false }));
          setInput("");
        }}
      >
        Add
      </Button>
    </div>
  );
}
export default Addtask;