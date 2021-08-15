import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

const SimpleRouterManager = props => {
    return (
        <Router>
        <Switch>
                {props.router.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  ></Route>
                ))}
              </Switch>
    </Router>
    );
};



export default SimpleRouterManager;