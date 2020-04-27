import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar'


export default function App(){
  return(
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  )
}
