import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./data/configureStore";
import LoadingSpinModal from "./pages/modal/LoadingSpinModal";

const { store, history } = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <LoadingSpinModal />
      <App history={history} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
