import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Components/Main";
import LoggedIn from "./Components/LoggedIn";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import "./App.scss";
const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route path="/" exact component={LoggedIn} />
          <Route path="/login" component={LoggedIn} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
