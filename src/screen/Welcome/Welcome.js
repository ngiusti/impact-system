import React, { Component } from 'react'
import {ReactComponent as HelmetLogo} from '../../assets/helmet-logo.svg';

import { Link } from 'react-router-dom'

import classes from  './Welcome.module.scss';

import Button from '../../components/UI/Button/Button'

export default class Welcome extends Component {

    componentDidMount() {
        console.log('hello from welcome')
    }

    render() {
        return (
            <div>
                <div className={classes.TitleWrap}>
                    <h1 className={classes.Title}>Impact System</h1>
                </div>
                <div>
                    <Button>Get Started</Button>
                </div>
                <div className={classes.LogoWrap}>
                    <HelmetLogo className={classes.Logo} />
                    <h4 className={classes.LogoName}>OEBALUS</h4>
                </div>

                {/* <Link to="/">Home</Link>
                <Link to="Game">Game</Link>
                <Link to="Score">Score</Link>
                <Link to="Login">Login</Link>
                <Link to="GameSelect">GameSelect</Link> */}
            </div>
        )
    }
}
