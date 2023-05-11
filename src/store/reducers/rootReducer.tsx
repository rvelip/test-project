import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";
import postReducer from "./postReducer";
import LoginReducer from "./loginReducer";

const rootReducer =  combineReducers({
  sampleData: sampleReducer,
  postState: postReducer,
  loginState: LoginReducer,
});

export default rootReducer