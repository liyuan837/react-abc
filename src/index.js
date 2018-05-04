//[1]导包
import React from 'react'
import ReactDOM from 'react-dom'

//[2] 创建虚拟DOM元素
let a = 10

const arrStr = [
    "毛利","柯南","毛利兰"
]

//方案一：定义一个空数组， 将来用来存放 名称 标签
var comp = [];
arrStr.forEach(item => {
    comp.push(<h1>{item}</h1>)
})

//方案二：数组的map方法
//注意：map方法是对数组的每一个元素进行操作，然后返回一个新数组，一定要return呢
const comp2 = arrStr.map(item => {
    return <h1 key={item}>{item}</h1>
})

//[3] 渲染
ReactDOM.render(comp2,document.getElementById("app"));

