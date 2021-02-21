import React,{useState} from 'react';
import Sidebar from './Sidebar';
import Widget from './Widget'
import SidebarOption from './SidebarOption';
import Feed from './Feed';
import Login from './Login';
import Home from './Home';
import {BrowserRouter,Route, Switch,Redirect } from 'react-router-dom';
const App = () => {

 
  return (
    <BrowserRouter>
    <>
       <div className="app">
       <Switch> <Route exact path="/" component={Login} />
       <Route exact path="/Home" component={Home} /></Switch>
      
      </div>
    </>
 </BrowserRouter>
 );
  };
export default App;