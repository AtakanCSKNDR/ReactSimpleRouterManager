import React from 'react';
import { routes } from "./routes/index";
import SimpleRouterManager from 'react-simple-router-manager';
const App = () => {
  return (
    <div>
      <SimpleRouterManager router={routes}></SimpleRouterManager>
    </div>
  );
};


export default App;