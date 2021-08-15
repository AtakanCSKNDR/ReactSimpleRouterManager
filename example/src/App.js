import React from 'react';
import { routes } from "./routes/index";
import SimpleRouterManager from './routeManage/SimpleRouterManager';
import { BrowserRouter as Router, Link} from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Link to="/">Home</Link> | 
        <Link to="/dashboard">Dashboard</Link> | 
        <Link to="/profile">Profile</Link>
        <SimpleRouterManager router={routes}></SimpleRouterManager>
      </Router>
    </div>
  );
};


export default App;