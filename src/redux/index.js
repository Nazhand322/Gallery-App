import { createStore } from 'redux';
import appReducer from "./reducer.js";

let initialState = {
	photos: [],
};

export const store = createStore(
	appReducer, initialState)
