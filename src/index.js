//[1]导包
import React from 'react'
import ReactDOM from 'react-dom'

import bootcss from 'bootstrap/dist/css/bootstrap.css'

//导入 Hello 组件，
import CommentList from '@/components/comment/CommentList'
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
ReactDOM.render(<CommentList data={data}></CommentList>,document.getElementById("app"));


