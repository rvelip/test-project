import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";
import postReducer from "./postReducer";

const rootReducer =  combineReducers({
  sampleData: sampleReducer,
  postState: postReducer
});

export default rootReducer