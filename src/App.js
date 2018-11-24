import React, { Component } from 'react';
import Header from './common/header/index';
import Iconfont from './statics/iconfont/Iconfont'

class App extends Component {
  render() {
    return (
      <div>
        <Iconfont />
        <Header />
      </div>
    );
  }
}

export default App;
