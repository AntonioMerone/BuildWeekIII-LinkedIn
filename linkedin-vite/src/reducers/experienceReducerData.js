export function experienceDataReducer(state = [], action) {
	switch (action.type) {
		/* mi aspetto un array di post e li metto al posto di sate */
		case "SET_EXPERIENCE_DATA":
			return action.payload;
		default:
			return state;
	}
}

export const getExperienceData = (data) => ({
	type: "SET_EXPERIENCE_DATA",
	payload: data,
});

