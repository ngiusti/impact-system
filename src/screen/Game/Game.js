import React, { Component } from 'react'

import Badge from '../../components/Badge/Badge'
import Target from '../../assets/target.png'
import Button from '../../components/UI/Button/Button'
import Shots from '../../components/GameParts/Shots/Shots'

import classes from './Game.module.scss'

export default class Game extends Component {
    
    state = {
        shots: 10,
        shotsRemaining: 10,
        players: [
            {
                name: "Player Long Name",
                score: 300,
                active: true,
                time: 0,
            },
            {
                name: "Player Long Name2",
                score: 200,
                active: false,
                time: 0,
            },
            {
                name: "Player Long Name3",
                score: 100,
                active: false,
                time: 0,
            }
        ],
        timer: 0,
    }

    componentDidMount() {

    }

    componentWillUpdate() {
        
    }

    getSeconds  = (time) => {
        return ('0' + time % 60).slice(-2);
    }

    getMin  = (time) => {
        return Math.floor(time / 60);
    }


    handleShot = () => {
        if(this.state.shotsRemaining > 0) {
            this.setState({
                shots: this.state.shots,
                shotsRemaining: this.state.shotsRemaining - 1,
            })
        } else {
            alert("you are out of shots")
        }
    }

    handleStart = () => {
        var _this = this
        if(this.incrementer){
            return;
        }else {
            this.incrementer = setInterval(() => {
                _this.setState({
                    timer: _this.state.timer + 1
                }) 
             }, 1000);
        }
    }

    handleStop = () => {
        this.setState({timer: 0})
        clearInterval(this.incrementer);
        this.incrementer = null ;
    }

    

    handleNextPlayer = () => {
        this.handleStop();
        let playerList = this.state.players
        this.setState({shotsRemaining: this.state.shots})
        for (let index in playerList) {
            if (index == playerList.length - 1){
                alert('done')
                playerList[index] = {...playerList[index], time: this.state.timer}
                break;
            }
            if(playerList[index].active === true  && index !== playerList.length-1){
                playerList[index] = {...playerList[index], active: !playerList[index].active}
                playerList[index] = {...playerList[index], time: this.state.timer}
                playerList[parseInt(index) + 1] = {...playerList[parseInt(index) + 1], active: !playerList[parseInt(index) + 1].active}
                break;
            }
        }
        console.log(this.state)
    }

    render() {
        let playerList = this.state.players
        let currentPlayer = {}
        for (let index in playerList) {
            if(playerList[index].active === true  && index !== playerList.length-1){
                currentPlayer = playerList[index]
                break;
            }
        }

        return (
            <div className={classes.GameScreen}>
                <div className={classes.TargetProgressWrap}>
                    <div>
                        <h2 className={classes.GameName}>Timer: {this.getMin(this.state.timer)}:{this.getSeconds(this.state.timer)}</h2>
                    </div>
                    <div className={classes.TargetWrap}>
                        <img className={classes.Target} src={Target} alt="Target" />
                    </div>
                    <div className={classes.ShotsWrap}>
                        <Shots shots={this.state.shots} shotsRemaining={this.state.shotsRemaining}/>
                    </div>
                </div>

                <div className={classes.InfoWrap}>
                    <h3 className={classes.GameName}>Cluster Shot</h3>
                    <div className={classes.PlayersWrap}>
                        {this.state.players.map((item, index) => (
                            <div key={index} className={[classes.PlayerWrap, item.active ? classes.PlayerActive : ""].join(' ')} >
                                <h2>{item.name}</h2>
                                <p>Score: {item.score}</p>
                            </div>                        
                        ))}
                    </div>
                    <div className={classes.playerCard}>
                        <p className={classes.playerInfo}>{currentPlayer.name}</p>
                        <p className={classes.playerInfo}>Time: {this.getMin(currentPlayer.time)}:{this.getSeconds(currentPlayer.time)}</p>
                        <p className={classes.playerInfo}>Score: {currentPlayer.score}</p>
                    </div>
                    <div>
                        <Button BtnStyles={[classes.Button, classes.startBtn].join(' ')} clicked={this.handleStart}>Start</Button>
                        <Button BtnStyles={[classes.Button, classes.whiteBtn].join(' ')} clicked={this.handleShot} disabled={!this.state.timer}>Missed Shot</Button>
                        <Button BtnStyles={[classes.Button, classes.NextBtn].join(' ')} clicked={this.handleShot} disabled={!this.state.timer}>Next Shot</Button>
                    </div>
                    <hr style={{ backgroundColor: 'white'}}/>
                    <div>
                        <Button BtnStyles={[classes.Button, classes.whiteBtn].join(' ')} clicked={this.handleNextPlayer}>Next Player</Button>
                        <Button BtnStyles={classes.Button} linkTo="/GameSelect">New Game</Button>
                        <Button BtnStyles={[classes.Button, classes.whiteBtn].join(' ')} linkTo="/Score">End Game</Button>
                    </div>
                </div>
            </div>
        )
    }
}
