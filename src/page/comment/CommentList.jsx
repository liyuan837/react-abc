import React from 'react'
import CommentItem from '@/components/comment/CommentItem'

//导入bootstrap样式
//规定：第三方 样式表 都是 .css结尾的，自己的样式表都要以.scss 或者 .less结尾
//这样，我们不用为 普通的.css文件启用模块化， 只为.scss或 .less文件启用模块化


import objcss from '@/styles/CommentList.scss'

//父组件采用 class 关键字 定义
class CommentList extends React.Component{
    constructor(props){
        super(props)
    }


    handleDelete=(deleteId,msg) => {
        this.props.handleDelete(deleteId)
    }

    render(){
        return(
            <div style={{margin:'auto 10px'}}>
                <h1 style={ { color:'red', fontSize:18,textAlign:'center'} }>评论列表</h1>
                <ul style={{listStyle:'none',margin:'0px',padding:'0px'}}>
                    {this.props.data.map(item => {
                        return <CommentItem key={item.id} data={item} handleDelete={this.handleDelete.bind(this)}></CommentItem>
                    })}
                </ul>

                <button onClick={this.SORTREVERSE.bind(this)}>倒叙显示</button>
            </div>
        )
    }
    SORTREVERSE(){
        console.log('daixu')
        this.props.SORTREVERSE();
    }
}

export default CommentList