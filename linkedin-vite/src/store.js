import { createStore, combineReducers } from "redux";
import { profileDataReducer } from "./reducers/profileReducerData";
import { postsDataReducer } from "./reducers/postsReducerData";
import { jobsReducer } from "./reducers/jobsReducer";

const rootReducer = combineReducers({
  profileData: profileDataReducer,
  postsData: postsDataReducer,
  jobs: jobsReducer,
});

export const store = createStore(rootReducer);
