import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { appReducer } from "./containers/App/reducers";
import { watcherSaga } from "./containers/App/sagas";

export default function configureStore(initialState = {}, history) {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // dev tools middleware
  // const reduxDevTools =
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

  // create a redux store with our reducer above and middleware
  const store = createStore(
    appReducer,
    // compose(applyMiddleware(sagaMiddleware), reduxDevTools)
    compose(applyMiddleware(sagaMiddleware))
  );

  // run the saga
  sagaMiddleware.run(watcherSaga);

  return store;
}
