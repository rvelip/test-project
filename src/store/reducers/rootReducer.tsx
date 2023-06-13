import { combineReducers } from "redux";
import VinReducer from "./vinReducer";
import VinTableReducer from "./vinTableReducer";
import UsersReducer from "./usersReducer";
import ProfileReducer from "./profileReducer";
import ConfigReducer from "./configReducer";
import AuthenticationReducer from "./authenticationReducer";
import storage from 'redux-persist/lib/storage' 

const rootReducer = (state: any, action: any) => {
  if (action.type === 'RESET') {
      // for all keys defined in your persistConfig(s)
      storage.removeItem('persist:root')

      return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const appReducer =  combineReducers({
  authenticationState: AuthenticationReducer,
  vinState: VinReducer,
  vinTableState: VinTableReducer,
  usersState: UsersReducer,
  profileState: ProfileReducer,
  config: ConfigReducer
});

export default rootReducer