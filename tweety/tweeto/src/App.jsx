import React from 'react';
import Sidebar from './Sidebar';
import Widget from './Widget'
import SidebarOption from './SidebarOption';
import Feed from './Feed';
import Login from './Login';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
const App = () => {

  return( <Switch>
    <>
      <div className="app">
        <Login />
        {/* <Rout exact path="/Home" component={Home} /> */}
        {/* <Sidebar />
        <Feed />
        <Widget /> */}
      </div>
    </>
  </Switch>
  );
};
export default App;