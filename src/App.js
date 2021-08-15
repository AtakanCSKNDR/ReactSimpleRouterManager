import React from 'react';
import { routes } from "./routes/index";
import SimpleRouterManager from './routeManage/SimpleRouterManager';
const App = () => {
  return (
    <div>
      <SimpleRouterManager router={routes}></SimpleRouterManager>
    </div>
  );
};

App.propTypes = {
  
};

export default App;