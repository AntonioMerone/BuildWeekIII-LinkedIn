// FIXME al posto di null mettere un payload esempio 
const initialProfileData = null
// ESEMPIO:
// const initialProfileData = {
//   id: null,
//   name: '',
//   ... 
// }

/* carica i dati nello "slice" del componente Profile */
export function profileDataReducer(state = initialProfileData, action) {
	switch (action.type) {
		case 'SET_PROFILE_DATA':
			return action.payload
		default:
			return state
	}
}

// helper
export const setProfileData = (data) => ({
	type: 'SET_PROFILE_DATA',
	payload: data
})
