import React, {Component} from'react'

class Home extends Component{
    render(){
        return(
            <div>
                <h1>Hello, world!</h1>
                <p>...</p>
                <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
            </div>
        )
    }


    componentDidMount(){
        console.log("首页渲染完毕")
    }
}

export default Home