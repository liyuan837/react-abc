
import React from 'react'

import cssObj from'@/styles/CommentItem'
console.log(cssObj)

//使用function构造函数，定义 子组件
class CommentItem extends React.Component{
    constructor(props){
        super(props)
    }

    handleDelete = ()=>{
        this.props.handleDelete(this.props.data.id,"shanchu");
    }

    render(){
        return(
            <li className={[cssObj.item , cssObj.test].join(' ')} style={{border:'dotted 1px black',marginTop:'10px',padding:'10px',boxShadow:'gray 1px 1px 5px',position:'relative'}}>
                <div id={cssObj.haha} style={{fontWeight:'bold'}}>用户：{this.props.data.user}</div>
                <div style={{fontSize:12,color:'#666',marginTop:'5px'}}>内容：{this.props.data.content}</div>
                <i className={["glyphicon glyphicon-remove-sign",cssObj.deleteItem].join(' ')} onClick={this.handleDelete}></i>
            </li>
        )
    }
}

export default CommentItem