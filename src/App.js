import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './common/header/index';
import Home from './pages/home';
import Detail from './pages/detail';

import Iconfont from './statics/iconfont/Iconfont'
import store from './store/index';

class App extends Component {
    render() {
        return (
            <div>
                <Iconfont/>
                <Provider store={store}>
                    <div>
                        <Header/>
                        <BrowserRouter>
                            <div>
                                <Route exact path='/' component={Home}/>
                                <Route exact path='/detail' component={Detail}/>
                            </div>
                        </BrowserRouter>
                    </div>
                </Provider>
            </div>
        );
    }
}

export default App;
