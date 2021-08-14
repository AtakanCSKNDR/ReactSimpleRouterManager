import React from 'react';
import Home from "./views/home/Home"
import Dashboard from "./views/dashboard/Dashboard"
import Profile from "./views/profile/Profile"
const App = () => {
  return (
    <div>
        <Home></Home>
        <Dashboard></Dashboard>
        <Profile></Profile>
    </div>
  );
};

App.propTypes = {
  
};

export default App;