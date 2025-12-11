const initialPostsData = [];

export function postsDataReducer(state = initialPostsData, action) {
  switch (action.type) {
    case "SET_POSTS_DATA":
      return action.payload;
    default:
      return state;
  }
}

export const setPostsData = (data) => ({
  type: "SET_POSTS_DATA",
  payload: data,
});
