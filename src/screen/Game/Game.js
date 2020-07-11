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

    getSeconds  = () => {
        return ('0' + this.state.timer % 60).slice(-2);
    }

    getMin  = () => {
        return Math.floor(this.state.timer / 60);
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
        clearInterval(this.incrementer);
    }

    

    handleNextPlayer = () => {
        this.handleStop();
        let playerList = this.state.players

        for (let index in playerList) {
            if (index == playerList.length - 1){
                alert('done')
                break;
            }
            if(playerList[index].active === true  && index !== playerList.length-1){
                playerList[index] = {...playerList[index], active: !playerList[index].active}
                playerList[parseInt(index) + 1] = {...playerList[parseInt(index) + 1], active: !playerList[parseInt(index) + 1].active}
                break;
            }
        }
    }

    render() {

        

        return (
            <div className={classes.GameScreen}>
                <div className={classes.TargetProgressWrap}>
                    <div>
                        <h2 className={classes.GameName}>Timer: {this.getMin()}:{this.getSeconds()}</h2>
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
                    <div className={classes.Something}>
                        <h2>Block of something!</h2>
                    </div>
                    <div>
                        <Button BtnStyles={[classes.Button, classes.startBtn].join(' ')} clicked={this.handleStart}>Start</Button>
                        <Button BtnStyles={[classes.Button, classes.whiteBtn].join(' ')} clicked={this.handleShot}>Missed Shot</Button>
                        <Button BtnStyles={[classes.Button, classes.NextBtn].join(' ')} clicked={this.handleShot}>Next Shot</Button>
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
