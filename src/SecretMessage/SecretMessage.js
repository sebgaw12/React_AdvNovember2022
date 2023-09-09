import React, {Component} from 'react'

class SecretMessage extends Component {
    constructor(props) {
        super()

        this.state = {
            showSecret : false
           
        }

    }
    
    displaySecret()
    {
        return <div>This is secret!</div>
    }

    controlMessage(event)
    {
        this.setState({showSecret : !this.state.showSecret})
    }

    render() {

        
        return (
            <div>
                <h1>SecretMessage</h1>
                <button onClick={this.controlMessage.bind(this)}>Show!</button>
                {/* {this.state.showSecret ? this.displaySecret() : null} */}
                {!this.state.showSecret || this.displaySecret()}
            </div>
        )
    }
}
export default SecretMessage;
