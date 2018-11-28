import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App/>, document.getElementById('root'));

// HMR模块热替换
if (module.hot) {
    module.hot.accept();
}