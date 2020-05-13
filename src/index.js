/*
 * @Author: houxiaoling 
 * @Date: 2020-05-08 11:15:42 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-05-13 18:06:07
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
import Search from './Components/Search'
import Article from './Components/Article'
import ArticleTags from './Components/ArticleTags'
import HotSearch from './Components/HotSearch'
import GoTop from './Components/GoTop'
import Tooltip from './Components/Tooltip'


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state={}
    }

    b(e) {
      console.log(e)
    }
    c(e) {
      console.log(e)
    }
    goArticle(e) {
      console.log(e)
  }

    render () {
      let p = '去年今日此门中，人面桃花相映红'
        return (
            <div className="App">
              {/* <HomeBody></HomeBody> 
              <NavigationBar></NavigationBar> */} 
              {/* <Search
                search={this.b}
                // focus={this.c}
                placeholder={p}
              /> */}
              {/* <Article
                goArticle={this.goArticle}
              /> */}
              {/* <ArticleTags 
              /> */}
              {/* <HotSearch/> */}
              {/* <GoTop/> */}
              <Tooltip type={'toolTip-top'} txt={'hellohellohelloahellohellohelloahellohellohelloa'}><div  style={{width:'500px', margin: '20px'}}>12345sadsadasd</div></Tooltip>
              {/* <Tooltip type={'toolTip-bottoom'} txt={'hellohellohelloa'}/>
              <Tooltip type={'toolTip-left'} txt={'hellohellohelloa'}/>
              <Tooltip type={'toolTip-right'} txt={'hellohelloahellohellohelloahellohelloaheahellohellohelloahellohelloaheahellohellohelloahellohelloahellohellohelloa'}/> */}
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
