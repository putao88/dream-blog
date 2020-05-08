/*
 * @Author: houxiaoling 
 * @Date: 2020-05-08 11:15:42 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-05-08 14:55:52
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css'; //重置样式
import * as serviceWorker from './serviceWorker';
import Header from './component/header/index'
import Banner from './component/banner/index'
import Article from './component/article/index'
import Footer from './component/footer/index'


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state={}
    }
    render () {
        return (
            <div className="App">
                <Header />
                <Banner />
                <Article />
                <Footer />
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
