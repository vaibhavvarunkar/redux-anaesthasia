import { createStore } from "redux"
// import thunk from "redux-thunk"
import caseSummaryReducer from "./caseSummaryReducer"

const store = createStore(caseSummaryReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store