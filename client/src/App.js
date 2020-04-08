import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Main from "./Components/Main";
import AccountLoggedIn from "./Components/accountLoginPage/AccountLoggedIn";
import BankLoggedIn from "./Components/bankLoginPage/BankLoggedIn";
import PersonLoggedIn from "./Components/personLoginPage/PersonLoggedIn";
import rootReducer from "./reducers";
import "./App.scss";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(
      ...middleware
    ) /* ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
  )
);

//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route path="/" exact component={Main} />
          <Route path="/account-login" component={AccountLoggedIn} />
          <Route path="/person-login" component={PersonLoggedIn} />
          <Route path="/bank-login" component={BankLoggedIn} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
