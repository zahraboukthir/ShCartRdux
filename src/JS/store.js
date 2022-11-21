import { createStore } from "redux";
import { shoppingcardReducer } from './reducers/panierReducers';

const devTools= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store=createStore(shoppingcardReducer,devTools)
