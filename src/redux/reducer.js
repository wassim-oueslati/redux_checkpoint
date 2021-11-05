import { Addtodo, DeleteTodo, isCompleted } from "./actionTypes";

const initialState = {
  arr: [
    { description: "Study", id: 0, isDone: false },
    { description: "Workout", id: 1, isDone: false }
  ]
};

export const AddReducer = (state = initialState, action) => {
  switch (action.type) {
    case Addtodo:
      return {
        ...state,
        arr: state.arr.concat(action.payload)
      };
    case DeleteTodo:
      return {
        ...state,
        arr: state.arr.filter((el) => el.id !== action.payload)
      };
    case isCompleted:
      return {
        ...state,
        arr: state.arr.map((el) =>
          el.id === action.payload
            ? { ...el, isDone: !el.isDone }
            : el
        )
      };
    default:
      return state;
  }
};