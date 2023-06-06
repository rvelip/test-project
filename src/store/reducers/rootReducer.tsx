import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";
import postReducer from "./postReducer";
import VinReducer from "./vinReducer";
import VinTableReducer from "./vinTableReducer";
import UsersReducer from "./usersReducer";
import ProfileReducer from "./profileReducer";
import ConfigReducer from "./configReducer";
import AuthenticationReducer from "./authenticationReducer";

const rootReducer =  combineReducers({
  authenticationState: AuthenticationReducer,
  sampleData: sampleReducer,
  postState: postReducer,
  vinState: VinReducer,
  vinTableState: VinTableReducer,
  usersState: UsersReducer,
  profileState: ProfileReducer,
  config: ConfigReducer,
});

export default rootReducer