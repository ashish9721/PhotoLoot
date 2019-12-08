import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer } from "../reducer/reducer";

const enhancer = compose(applyMiddleware(thunk, logger));
/**
 * create new store
 */
const store = createStore(reducer, enhancer);
export default store;
