import React, { Component } from 'react'

import Button from '../../components/UI/button/button'
import PlayerLogin from '../../components/player-login/player-login'
import Slider from '../../components/UI/slider/slider'

import classes from './login.module.scss'

export default class Login extends Component {

    render() {
        return (
            <div>
                <div className={classes.PlayersContainer}>
                    <PlayerLogin player={"1"}/>
                    <PlayerLogin player={"2"}/>
                    <PlayerLogin player={"3"}/>
                </div>
                <Slider title="Time" unit="Minutes"/>
                <Button linkTo="/GameSelect" btnStyles={classes.Btn}>Get Started</Button>
            </div>
        )
    }
}
