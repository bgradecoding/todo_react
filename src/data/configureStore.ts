import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { createRootReducer } from "./rootReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

const history = createBrowserHistory();

const rootReducer = createRootReducer(history);
export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, routerMiddleware(history)),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f: any) => f
    )
  );

  return {
    store,
    history,
  };
}
