import { Addtodo } from "./actionTypes";
import { DeleteTodo } from "./actionTypes";
import { isCompleted } from "./actionTypes";
export const AddHandler = (payload) => {
  return {
    type: Addtodo,
    payload
  };
};
export const DeleteHandler = (payload) => {
  return {
    type: DeleteTodo,
    payload
  };
};
export const DoneHandler = (payload) => {
  return {
    type: isCompleted,
    payload
  };
};
