import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, connect } from "react-redux";
import App from "./components/App";
import { configureStore } from "./store";

const store = configureStore();
console.log("store", store);
console.log("STATE", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
