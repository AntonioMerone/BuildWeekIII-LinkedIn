const initialPostsData = [];
const posto = {
  text: "Questo è un nuovo post",
  username: "mario88",
  createdAt: "2023-10-01T19:44:04.496Z",
  updatedAt: "2023-10-01T19:44:04.496Z",
  __v: 0,
  _id: "5d93ac84b86e220017e76ae1",
};
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
