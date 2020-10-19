import React, { Component } from 'react'

import Button from '../UI/button/button'

import LoginForm from '../login-form/login-form'
import SignInForm from '../sign-up-form/sign-up-form'

import classes from './player-login.module.scss'

class PlayerLogin extends Component {

    constructor() {
        super();
        this.state = {
            loggedIn: true
        };
    }

    handlerLoggedIn = () => {
        this.setState({
            loggedIn: !this.state.loggedIn
        })
    }

    render() {
        const { loggedIn } = this.state
        return (
            <div className={classes.PlayerContainer}>
                <h2 className={classes.PlayerHeader}>Player {this.props.player}</h2>
                {
                    loggedIn ? <LoginForm loggedIn={this.handlerLoggedIn} /> : <SignInForm loggedIn={this.handlerLoggedIn} />
                }
            </div>
        )
    }
}

export default PlayerLogin