import React, { Component } from 'react';
import {
    Route,
    Link
} from 'react-router-dom';


import Login from '@/page/login/Login'
import Home from '@/page/home/Home'
import About from '@/page/about/About'
import CommentReactRedux from '@/page/comment/CommentReactRedux';


class App extends Component {
    render() {
        return (
            <div className="App">
                <ul>
                    <li>
                        <Link to="/">登录</Link>
                    </li>
                    <li>
                        <Link to="/Home">主页</Link>
                    </li>
                    <li>
                        <Link to="/About">关于我们</Link>
                    </li>
                    <li>
                        <Link to="/Comment">评论页面</Link>
                    </li>
                </ul>
                <div>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/Home" component={Home}/>
                    <Route path="/About" component={About}/>
                    <Route path="/Comment" component={CommentReactRedux}/>
                </div>
            </div>
        );
    }
}

export default App;