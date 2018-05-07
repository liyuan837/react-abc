//[1]导包
import React from 'react'
import ReactDOM from 'react-dom'

import bootcss from 'bootstrap/dist/css/bootstrap.css'

//导入组件
import {BrowserRouter as Router} from 'react-router-dom';
import App from '@/App';

//redux 和react-redux（关联react和redux）
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//reducers 状态树state和逻辑操作
import rootRedux from './rootRedux.js'

const data = [
    {
        id:1,
        user:'李袁',
        content:'哈哈，皮'
    },
    {
        id:2,
        user:'昭君',
        content:'哈哈，真皮'
    },
    {
        id:3,
        user:'甄姬',
        content:'哈哈，真的是皮'
    }
]

//创建状态树和设置

//生成状态树对象
const store = createStore(rootRedux);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("app"));


