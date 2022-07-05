import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";

import App from "./App";

import "./index.css";
// import { Provider } from "react-redux";
// import rootReducer from "store/reducers";
// import { createStore } from "redux";

// const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
