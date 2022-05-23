import React from "react";
import { Switch, Route } from "react-router";

import { Home } from "./pages/Home/components/Home";
import { MonthStatistics } from "./pages/MonthStatistics/components/MonthStatistics";

import { Header } from "./shared/Header/Header";
import { Popup } from "./shared/Popup/Popup";

function App() {
  return (
    <div className="global__container">
      <Popup />
      <div className="container">
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/month-statistics"
            exact
            component={MonthStatistics}
          ></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
