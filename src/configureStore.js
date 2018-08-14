import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./containers/App/reducers";
import { watcherSaga } from "./containers/App/sagas";

export default function configureStore(initialState = {}, history) {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // dev tools middleware
  // const reduxDevTools =
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

  // create a redux store with our reducer above and middleware
  let store = createStore(
    rootReducer,
    // compose(applyMiddleware(sagaMiddleware), reduxDevTools)
    compose(applyMiddleware(sagaMiddleware))
  );

  // run the saga
  sagaMiddleware.run(watcherSaga);

  return store;
}
