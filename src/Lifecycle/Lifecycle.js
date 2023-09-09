import React, {Component} from 'react'

class Lifecycle extends Component {
    constructor(props) {
        super()
        console.log("Constructor")
        this.state = {
            
           cycle : 0
        }

        setInterval(() => this.setState({cycle : this.state.cycle + 1}), 5000)

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
                <h1>Lifecycle</h1>
               Cycle: {this.state.cycle}     
            </div>
        )
    }
}
export default Lifecycle;
