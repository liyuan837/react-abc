import { combineReducers } from 'redux';

//全局reducer
import isLogin from '@/indexRedux'
//子reducer
import CommentRedux from '@/page/comment/CommentRedux'

//合并reducer
var rootRedux = combineReducers({
    isLogin,
    CommentRedux
})

export default rootRedux