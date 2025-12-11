import { store } from '../store.js'

store.subscribe(() => {
	console.log('log: ', store.getState())
})

console.log('start: ', store.getState())

store.dispatch({
	type: 'SET_PROFILE_DATA',
	payload: { id: 1, name: 'Fra', email: 'fra@example.com' }
})

store.dispatch({
	type: 'SET_PROFILE_DATA',
	payload: { id: 2, name: 'New User', email: 'new@example.com' }
})
