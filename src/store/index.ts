
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import filmsReducerId from "./filmDetail/reduser";
import filmsReducer from "./films/reduser";

const rootReducer = combineReducers({
	filmsReducerId,filmsReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
