import { createStore, combineReducers } from "redux";
import { profileDataReducer } from "./reducers/profileReducerData";
import { postsDataReducer } from "./reducers/postsReducerData";
import { jobsReducer } from "./reducers/jobsReducer";
import { experienceDataReducer } from "./reducers/experienceReducerData";

const rootReducer = combineReducers({
  profileData: profileDataReducer,
  jobs: jobsReducer,
  experienceData: experienceDataReducer,
  postsData: postsDataReducer,
});

export const store = createStore(rootReducer);
