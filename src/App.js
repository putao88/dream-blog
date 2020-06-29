import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from './Main/Home/index'
import Blog from './Main/Blog/index'
import NavigationBar from './Components/NavigationBar/index'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/home" exact component={Home}></Route>
            <Route path="/blog" exact component={Blog}></Route>
            <Redirect path="/" to='/home'></Redirect>
          </Switch>
          <NavigationBar/>
        </div>
      </Router>
    )
  }
}

export default App;
