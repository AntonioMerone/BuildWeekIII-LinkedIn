import { createStore, combineReducers } from "redux";
import { profileDataReducer } from "./reducers/profileReducerData";
import { postsDataReducer } from "./reducers/postsReducerData";

const rootReducer = combineReducers({
  profileData: profileDataReducer,
  postsData: postsDataReducer,
});

export const store = createStore(rootReducer);
