// FIXME al posto di null mettere un payload esempio
const initialProfileData = {
  _id: "",
  name: "",
  surname: "",
  email: "",
  username: "",
  title: "",
  bio: "",
  area: "",
  image: "",
  createdAt: "2023-10-30T07:28:02.447Z",
  updatedAt: "2023-10-30T07:28:02.447Z",
  v: 0,
};

// ESEMPIO:
// const initialProfileData = {
//   id: null,
//   name: '',
//   ...
// }

/* carica i dati nello "slice" del componente Profile */
export function profileDataReducer(state = initialProfileData, action) {
  switch (action.type) {
    case "SET_PROFILE_DATA":
      return action.payload;
    default:
      return state;
  }
}

// helper
export const setProfileData = (data) => ({
  type: "SET_PROFILE_DATA",
  payload: data,
});
