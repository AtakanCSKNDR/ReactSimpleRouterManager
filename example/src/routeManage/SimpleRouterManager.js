import React from 'react';
import {Switch , Route} from "react-router-dom";

const SimpleRouterManager = props => {
  return (
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
    );
};



export default SimpleRouterManager;