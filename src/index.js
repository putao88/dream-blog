/*
 * @Author: houxiaoling 
 * @Date: 2020-05-08 11:15:42 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-07-31 17:10:38
 */


import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Redirect, Switch, HashRouter } from 'react-router-dom'
import './index.css'
import './reset.css' //重置样式
import * as serviceWorker from './serviceWorker'
import Home from './Pages/Home'
import User from './Pages/user'





class App extends React.Component {
    render() {
      return (
        <HashRouter>
          <div className="App">
            <Switch>
              <Route path="/home" exact component={Home}></Route>
              <Route path="/user" exact component={User}></Route>
              <Redirect path="/" to='/home'></Redirect>
            </Switch>
          </div>
        </HashRouter>
      )
    }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
