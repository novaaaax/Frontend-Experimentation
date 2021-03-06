import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import {Home, Staking} from './components/Home'
import Learn from './components/Learn'
import About from './components/About'
import Login from './components/Login'



export default function App(){
  return(
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/" component={()=><><Home /><Staking /></>} exact></Route>
        {/* <Route path="/" component={Staking}></Route> */}
        <Route path="/learn" component={Learn}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </BrowserRouter>
  )
}
