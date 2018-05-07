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
        this.state = {
            data:props.data,
            inputValue:''
        }

    }

    handleClick = () => {
        var id = new Date().getTime()
        var content = this.state.inputValue
        var item = {
            id:id,
            user:'李袁'+id,
            content:content
        }
        this.setState({
            data:[...this.state.data,item],
            inputValue:''
        })
    }

    handleChange = (e) => {
        this.setState({
            inputValue:e.target.value
        })
        console.log(this.state)
    }

    handleDelete=(deleteId,msg) => {
        console.log(msg+"==="+deleteId)
        for(var i=0;i<this.state.data.length;i++){
            if(deleteId == this.state.data[i].id){
                this.state.data.splice(i,1)
            }
        }
        this.setState({
            data:this.state.data
        })
    }

    render(){
        return(
            <div style={{margin:'auto 10px'}}>
                <h1 style={ { color:'red', fontSize:18,textAlign:'center'} }>评论列表</h1>
                <ul style={{listStyle:'none',margin:'0px',padding:'0px'}}>
                    {this.state.data.map(item => {
                        return <CommentItem key={item.id} data={item} handleDelete={this.handleDelete.bind(this)}></CommentItem>
                    })}
                </ul>
                <form className={"form-inline" + ' ' + objcss.myForm}>
                    <div className="form-group">
                        <label htmlFor="exampleInputName2">发表评论</label>
                        <input type="text" className="form-control" id="exampleInputName2" placeholder="please input..." value={this.state.inputValue} onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <button type="button" className="btn btn-default" onClick={() => this.handleClick(this)}>发送</button>
                </form>
            </div>
        )
    }
}

export default CommentList