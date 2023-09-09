import React, {Component} from 'react'

class CounterClass extends Component {
    constructor(props) {
        super()

        this.state = {
            counter : 0
        }

    }

    increaseCounter()
    {
        this.state.counter = this.state.counter + 1
    }

    render() {
        console.log(this.state)
        
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={() => this.setState({counter : this.state.counter + 1})} >+1</button>
            </div>
        )
    }
}
export default CounterClass;
