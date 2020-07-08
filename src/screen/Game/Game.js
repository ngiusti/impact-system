import React, { Component } from 'react'

import Badge from '../../components/Badge/Badge'
import Target from '../../assets/target.png'
import Button from '../../components/UI/Button/Button'
import Shots from '../../components/GameParts/Shots/Shots'

import classes from './Game.module.scss'

export default class Game extends Component {

    componentDidMount() {
        console.log('hello from Game')
    }

    render() {
        return (
            <div className={classes.GameScreen}>
                <div className={classes.TargetProgressWrap}>
                    <div className={classes.TargetWrap}>
                        <img className={classes.Target} src={Target} alt="Target" />
                    </div>
                    <div>
                        <Shots/>
                    </div>
                </div>

                <div className={classes.InfoWrap}>
                    <h3 className={classes.GameName}>Cluster Shot</h3>
                    <div className={classes.PlayersWrap}>
                        <div className={[classes.PlayerWrap, classes.PlayerActive].join(' ')} >
                            <h2>Player guy long name</h2>
                            <p>Score: 1000</p>
                        </div>
                        <div className={classes.PlayerWrap} >
                            <h2>Player 2</h2>
                            <p>Score: 10</p>
                        </div>
                        <div className={classes.PlayerWrap} >
                            <h2>Player 3</h2>
                            <p>Score: 10</p>
                        </div>
                    </div>
                    <div className={classes.Something}>
                        <h2>Block of something!</h2>
                    </div>
                    <div>
                        <Button BtnStyles={[classes.Button, classes.MissedBtn].join(' ')}>Missed Shot</Button>
                        <Button BtnStyles={[classes.Button, classes.NextBtn].join(' ')}>Next Shot</Button>
                    </div>
                    <div>
                        <Button BtnStyles={classes.Button} linkTo="/">Exit Game</Button>
                    </div>
                </div>
            </div>
        )
    }
}
