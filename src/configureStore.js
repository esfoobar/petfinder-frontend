import { createStore } from "redux"
import rootReducer from "../components/App/reducers"

const store = createStore(rootReducer)
export default store
