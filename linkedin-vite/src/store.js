import { createStore, combineReducers } from "redux";

import { profileDataReducer } from "./reducers/profileReducerData";

const rootReducer = combineReducers({
  profileData: profileDataReducer,
});

export const store = createStore(rootReducer);
