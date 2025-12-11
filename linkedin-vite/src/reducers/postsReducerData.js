const initialPostsData = [];
const posto = {
  "text": "Questo è un nuovo post", // L'unica proprietà richiesta!
  "username": "mario88", // SERVER GENERATED
  "createdAt": "2023-10-01T19:44:04.496Z", // SERVER GENERATED
  "updatedAt": "2023-10-01T19:44:04.496Z", // SERVER GENERATED
  "__v": 0, // SERVER GENERATED
  "_id": "5d93ac84b86e220017e76ae1", // SERVER GENERATED
}
export function postsDataReducer(state = initialPostsData, action) {
	switch (action.type) {
		/* mi aspetto un array di post e li metto al posto di sate */
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

