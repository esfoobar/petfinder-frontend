import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension'

import { appReducer } from "./containers/App/appReducer";
import rootSaga from "./containers/App/rootSaga";

export default function configureStore(initialState = {}, history) {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // create a redux store with our reducer above and middleware
  const store = createStore(
    appReducer,
    // compose(applyMiddleware(sagaMiddleware), reduxDevTools)
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
  );

  // run the saga
  sagaMiddleware.run(rootSaga);

  return store;
}
