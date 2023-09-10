import React, {Component} from 'react'

class Lifecycle extends Component {
    constructor(props) {
        super()
        this.title = "Lifecycle"
        console.log("Constructor")
        this.state = {
            
           cycle : 0
        }

        setInterval(() => this.setState({cycle : this.state.cycle + 1}), 5000)

    }

    setTitle()
    {
        this.title = "Title from button"
    }

    componentDidUpdate(prevProps, prevState)
    {
        console.log("Component did update")
        console.log('prevProps:', prevProps)
        console.log('prevState:', prevState)
    }
    componentDidMount()
    {
        console.log("Component did mount")
    }
    render() {
        console.log("Render")

        
        return (
            <div>
                <h1>{this.title}</h1>
               Cycle: {this.state.cycle}<br />    
               <button onClick={() => this.setTitle()}>Set title</button>
            </div>
        )
    }
}
export default Lifecycle;
