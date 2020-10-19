import React, { Component } from 'react'

import Button from '../UI/button/button'
import FormInput from '../form-input/form-input'

import classes from './login-form.module.scss'

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
        };
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    render() {
        const { username, password } = this.state;

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
                        type='password'
                        name='password'
                        label='Password'
                        onChange={this.handleChange}
                        value={password}
                        required
                    />
                </form>
                <div className={classes.ButtonContainer}>
                    <Button btnType={'orange'}>Login</Button>
                    <Button>Guest</Button>
                    <Button btnType={'text'} clicked={this.props.loggedIn}>Create Account</Button>
                </div>
            </div>
        )
    }

}

export default LoginForm;