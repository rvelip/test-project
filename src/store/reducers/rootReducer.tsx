import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";
import postReducer from "./postReducer";
import VinReducer from "./vinReducer";
import VinTableReducer from "./vinTableReducer";

const rootReducer =  combineReducers({
  sampleData: sampleReducer,
  postState: postReducer,
  vinState: VinReducer,
  vinTableState: VinTableReducer,
});

export default rootReducer