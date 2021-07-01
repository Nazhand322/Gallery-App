const appReducer = (state, action) => {
	switch (action.type) {
		case 'GET_PHOTOS': {
			return ({
				...state,
				photos: state.photos
			});
		}
		case 'CHANGE_PHOTOS': {
			return ({
				...state,
				photos: action.data
			})
		}
	}
	return state;
}

export default appReducer