import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";
import postReducer from "./postReducer";
import VinReducer from "./vinReducer";

const rootReducer =  combineReducers({
  sampleData: sampleReducer,
  postState: postReducer,
  vinState: VinReducer,
});

export default rootReducer