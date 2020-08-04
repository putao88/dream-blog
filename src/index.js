/*
 * @Author: houxiaoling 
 * @Date: 2020-05-08 11:15:42 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-08-04 16:58:15
 */


import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Redirect, Switch, HashRouter } from 'react-router-dom'
import './index.css'
import './reset.css' //重置样式
import './layui.css' //layui样式
import * as serviceWorker from './serviceWorker'
import Layout from './Pages/Layout'






class App extends React.Component {
    render() {
      return (
        <HashRouter>
          <div className="App">
            <Switch>
              <Route path="/home" exact component={Layout}></Route>
              <Route path="/user" exact component={Layout}></Route>
              <Route path="/*" exact component={Layout}></Route>
              {/* <Redirect path="/*" to='/'></Redirect> */}
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
