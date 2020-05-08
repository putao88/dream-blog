import React from 'react';

import './App.css';
import NavigationBar from './Components/NavigationBar/'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <div className='background-div'> */}
            {/* <img src='../assets/img/background.jpg' /> */}
            {/* <img src='https://yssimage.oss-cn-hangzhou.aliyuncs.com/11.jpg' /> */}
            {/* <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588832748652&di=a0fff51d7fee1cfa10b515c8755d48a1&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170816%2Ffe1419ef7dad495e98ca77b14db43252_th.png" alt=""/> */}
        {/* </div>
      </header> */}
      <NavigationBar></NavigationBar>
    </div>
  );
}

export default App;
