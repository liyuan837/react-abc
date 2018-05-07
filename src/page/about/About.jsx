import React, {Component} from'react'

class About extends Component{
    render(){
        return(
            <div>
                <h1>About Us!</h1>
            </div>
        )
    }


    componentDidMount(){
        console.log("关于页面渲染完毕")
    }
}

export default About