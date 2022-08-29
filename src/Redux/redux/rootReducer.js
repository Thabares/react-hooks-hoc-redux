import { combineReducers } from "redux";
import booksReducer from "./books/booksReducer";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    books: booksReducer
})

export default rootReducer