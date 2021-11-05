import { createStore } from "redux";
import { AddReducer } from "./reducer";

export const store = createStore(AddReducer);