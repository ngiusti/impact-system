import React, { Component } from 'react'

import FormInput from '../form-input/form-input'
import Button from '../UI/button/button'

import classes from './player-login.module.scss'

class PlayerLogin extends Component {

    constructor() {
        super();
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

        return(
            <div className={classes.PlayerContainer}>
                <h2 className={classes.PlayerHeader}>Player {this.props.player}</h2>
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
                    <Button btnStyles={classes.LoginBtn}>Login</Button>
                    <Button btnStyles={classes.GuestBtn}>Guest</Button>
                    <Button btnStyles={classes.SignUpBtn}>Create Account</Button>
                </div>
            </div>
        )
    }
}

export default PlayerLogin