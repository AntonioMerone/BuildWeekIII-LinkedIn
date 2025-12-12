const initialJobsState = {
  results: [],
  companyJobs: [],
  categoryJobs: [],
  isLoading: false,
  error: null,
};

export function jobsReducer(state = initialJobsState, action) {
  switch (action.type) {
    case "SET_JOBS_SEARCH":
      return { ...state, results: action.payload };
    case "SET_JOBS_COMPANY":
      return { ...state, companyJobs: action.payload };
    case "SET_JOBS_CATEGORY":
      return { ...state, categoryJobs: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

// Actions Helper
export const setJobsSearch = (data) => ({
  type: "SET_JOBS_SEARCH",
  payload: data,
});
export const setJobsCompany = (data) => ({
  type: "SET_JOBS_COMPANY",
  payload: data,
});
export const setJobsCategory = (data) => ({
  type: "SET_JOBS_CATEGORY",
  payload: data,
});
