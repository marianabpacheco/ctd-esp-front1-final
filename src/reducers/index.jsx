import { combineReducers } from "redux";
import { fetchCharactersReducer } from "./fetchCharactersReducer";

export default combineReducers({
    characters:fetchCharactersReducer,
})