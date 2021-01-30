import React from 'react';
import Sidebar from './Sidebar';
import Widget from './Widget'
import SidebarOption from './SidebarOption';
import Feed from './Feed';
const App = () => {

  return (
    <>
      <div className="app">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </>
  );
};
export default App;