import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { createRootReducer } from "./rootReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

const history = createBrowserHistory();

export default function configureStore() {
  const store = createStore(
    createRootReducer(),
    compose(
      applyMiddleware(thunk.withExtraArgument({ history: history })),
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
