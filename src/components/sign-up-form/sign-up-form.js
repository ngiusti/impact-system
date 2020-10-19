import React, { Component } from 'react'

import FormInput from '../form-input/form-input'
import Button from '../UI/button/button'


class SignUpForm extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            email: "",
            password: "",
            passwordConfirm: "",
        };
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    render() {
        const { username, email, password, passwordConfirm } = this.state;

        return (
            <div>
                <form >
                    <FormInput
                        type='text'
                        name='username'
                        label='User Name'
                        onChange={this.handleChange}
                        value={username}
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        label='Email'
                        onChange={this.handleChange}
                        value={email}
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        label='Password'
                        onChange={this.handleChange}
                        value={password}
                        required
                    />
                </form>
                <div>
                    <Button btnType={'orange'}>Sign Up</Button>
                    <Button btnType={'text'} clicked={this.props.loggedIn}>Back</Button>
                </div>
            </div>
        )
    }

}

export default SignUpForm;