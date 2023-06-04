import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";
import postReducer from "./postReducer";
import VinReducer from "./vinReducer";
import VinTableReducer from "./vinTableReducer";
import UsersReducer from "./usersReducer";

const rootReducer =  combineReducers({
  sampleData: sampleReducer,
  postState: postReducer,
  vinState: VinReducer,
  vinTableState: VinTableReducer,
  usersState: UsersReducer,
});

export default rootReducer