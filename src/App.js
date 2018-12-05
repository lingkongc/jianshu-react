import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';

import Iconfont from './statics/iconfont/Iconfont'
import store from './store/index';

class App extends Component {
    render() {
        return (
            <div>
                <Iconfont/>
                <Provider store={store}>
                    <BrowserRouter>
                        <div>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/detail/:id' component={Detail}/>
                            <Route exact path='/login' component={Login}/>
                            <Route exact path='/write' component={Write}/>
                        </div>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

export default App;
