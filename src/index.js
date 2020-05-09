/*
 * @Author: houxiaoling 
 * @Date: 2020-05-08 11:15:42 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-05-09 16:37:59
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css'; //重置样式
import * as serviceWorker from './serviceWorker';
import Header from './component/header/index'
import Content from './component/content/index'
import Footer from './component/footer/index'
import NavigationBar from './Components/NavigationBar/index'
import HomeBody from './Main/Home/homeBody'


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state={}
    }
    render () {
        return (
            <div className="App">
              <HomeBody></HomeBody>
              <NavigationBar></NavigationBar>
            </div>
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
