import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img style={{width:'400px', height:'300px'}}src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588832748652&di=a0fff51d7fee1cfa10b515c8755d48a1&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170816%2Ffe1419ef7dad495e98ca77b14db43252_th.png" alt=""/>
      </header>
    </div>
  );
}

export default App;
