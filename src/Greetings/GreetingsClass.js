import React, {Component} from 'react'

class GreetingsClass extends Component {
    constructor(props) {
        super()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Hi! {this.props.name}</h1>
            </div>
        )
    }
}
export default GreetingsClass;
