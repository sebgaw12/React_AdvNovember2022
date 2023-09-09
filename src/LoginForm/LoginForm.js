import React, {Component} from 'react'

class LoginForm extends Component {
    constructor(props) {
        super()

        this.state = {
            username : "",
            password : "",
            passwordConfirmation : "",
            email : "",
            errors : []
        }

        this.validatePasswordOnBlur= this.validatePasswordOnBlur.bind(this)

    }
    validateNotEmpty(field, value)
    {
        if(value.length <= 0) {
            return  `${field} must be filled out!`
        }
    }

    validateUsernameOnBlur(event)
    {
        console.log(event.target.value)

        const username = event.target.value;
        const errors = this.state.errors;

        var validate_result = this.validateNotEmpty("Username", username)
        if(validate_result)
            {
                this.setState({username : ""})
                errors.push(validate_result)
            }

        this.setState({username, errors })

    }

    validatePasswordOnBlur(event)
    {
        const password = event.target.value
        this.setState({password})
    }

    validatePasswordConfirmationOnBlur(event)
    {
        const passwordConfirmation = event.target.value
        this.setState({passwordConfirmation})
    }

    displayErrors()
    {
        return (
            <div>
                {this.state.errors.map((err, i) => <p key={i}>{err}</p>)}
            </div>
        )
    }
    displayForm()
    {
        return (
            <div>
                Username : <input type="text" onBlur={this.validateUsernameOnBlur.bind(this)} /><br />
                Password : <input type="text" onBlur={this.validatePasswordOnBlur} /><br />
                Password Confirmation : <input type="text" onBlur={(event) => this.validatePasswordConfirmationOnBlur(event)} /><br />
                Email : <input type="text" /><br />
                <br/>
                {this.displayErrors()}

            </div>
        )
    }

    render() {
        console.log(this.state)
        
        return (
            <div>
                <h1>LoginForm</h1>
                {this.displayForm()}
            </div>
        )
    }
}
export default LoginForm;
