import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loginto from './Loginto';
import Login from './Login';

const App=()=>{
  return (
    <>
    <Switch>
    <Route exact path="/Loginto" component={Loginto} />
    <Login/>
    </Switch>
    </>
  );
}

export default App;
