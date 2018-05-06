import React from 'react'

//创建类
class Hello extends React.Component{
    constructor(props){
       super(props)
        //这个this.state={ }就相当于vue中的data(){ return { } }
        this.state={}
    }
    render(){
        return(
            <div>
                <ul>
                    {/*class关键字创建的组件中， 如果使用 外界传递过来的 props参数，不需要接收， 直接通过 this.props.*即可*/}
                    {this.props.ps.map(p => {
                        return  <li>{p.name}--{p.age}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default Hello