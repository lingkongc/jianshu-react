import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header/index';
import Iconfont from './statics/iconfont/Iconfont'
import store from './store/index';

class App extends Component {
  render() {
    return (
      <div>
        <Iconfont />
        <Provider store={store}>
          <Header />
        </Provider>
      </div>
    );
  }
}

export default App;
