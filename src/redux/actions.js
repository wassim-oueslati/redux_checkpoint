import { Addtodo ,DeleteTodo ,isCompleted ,Edit_Task ,Filter_Task } from "./actionTypes";

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

export const EditTask = (payload) => {
  return {
    type: Edit_Task,
    payload
  };
};

export const FilterTask = (payload) => {
  return {
    type: Filter_Task,
    payload
  };
};


