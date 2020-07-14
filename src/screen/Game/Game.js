import React, { Component } from 'react'
import { connect } from 'react-redux'

import Target from '../../assets/target.png'
import Button from '../../components/UI/Button/Button'
import Shots from '../../components/GameParts/Shots/Shots'
import * as actionTypes from '../../store/actions'

import classes from './Game.module.scss'

class Game extends Component {
    
    state = {
        timer: 0,
        gameDone: false,
        roundStart: false,
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


    handleStart = () => {
        this.setState({
            roundStart: true
        })
        
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

    shotsHandler = () => {
        this.props.onShotsfired();
        if(this.props.shotsRemaining === 1){
            this.handleStop();
        }
    }

    handleStop = () => {
        clearInterval(this.incrementer);
        this.incrementer = null ;
    }

    handleNextPlayer = () => {
        this.handleStop();
        this.props.newGame();
        this.setState({
            roundStart: false
        })
        let playerList = this.props.players
        console.log(playerList)
        this.setState({shotsRemaining: this.props.shots})
        for (let index in playerList) {
            if (index == playerList.length - 1){
                playerList[index] = {...playerList[index], time: this.state.timer}
                this.setState({gameDone: true})
                break;
            }
            if(playerList[index].active === true  && index != playerList.length-1){
                playerList[index] = {...playerList[index], active: !playerList[index].active}
                playerList[index] = {...playerList[index], time: this.state.timer}
                playerList[parseInt(index) + 1] = {...playerList[parseInt(index) + 1], active: !playerList[parseInt(index) + 1].active}
                this.setState({timer: 0})
                break;
            }
        }
    }

    render() {
        let playerList = this.props.players
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
                    <div className={classes.TargetWrap}>
                        <img className={classes.Target} src={Target} alt="Target" />
                    </div>
                    <div className={classes.ShotsWrap}>
                        <Shots shots={this.props.shots} shotsRemaining={this.props.shotsRemaining}/>
                    </div>
                </div>

                <div className={classes.InfoWrap}>
                    <h3 className={classes.GameName}>{this.props.gameType}</h3>
                    <div className={classes.PlayersWrap}>
                        {this.props.players.map((item, index) => (
                            <div key={index} className={[classes.PlayerWrap, item.active ? classes.PlayerActive : ""].join(' ')} >
                                <h2>{item.name}</h2>
                                <p>Score: {item.score}</p>
                                <p >Time: {this.getMin(item.time)}:{this.getSeconds(item.time)}</p>
                            </div>                        
                        ))}
                    </div>
                    <div className={classes.playerCard}>
                        <p className={classes.playerScore}>Score: {currentPlayer.score}</p>
                        <p className={classes.playerInfo}>Time: {this.getMin(this.state.timer)}:{this.getSeconds(this.state.timer)}</p>
                    </div>
                    <div>
                        <Button BtnStyles={[classes.Button, classes.startBtn].join(' ')} clicked={this.handleStart} disabled={this.state.gameDone || this.state.roundStart}>Start</Button>
                        <Button BtnStyles={[classes.Button, classes.whiteBtn].join(' ')} clicked={this.shotsHandler} disabled={!this.state.timer || this.state.gameDone}>Missed Shot</Button>
                        <Button BtnStyles={[classes.Button, classes.NextBtn].join(' ')} clicked={this.shotsHandler} disabled={!this.state.timer || this.state.gameDone}>Next Shot</Button>
                    </div>
                    <hr style={{ backgroundColor: 'white'}}/>
                    <div>
                        <Button BtnStyles={[classes.Button, classes.whiteBtn].join(' ')} clicked={this.handleNextPlayer} disabled={this.state.gameDone}>Next Player</Button>
                        <Button BtnStyles={classes.Button} linkTo="/GameSelect">New Session</Button>
                        <Button BtnStyles={[classes.Button, classes.whiteBtn].join(' ')} linkTo="/Score">End Session</Button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        shots:  state.shots,
        shotsRemaining: state.shotsRemaining,
        gameType: state.gameType,
        players: state.players
    }
}



const mapDispatchToProps = dispatch => {
    return {
        onShotsfired: () => dispatch({type: actionTypes.SHOT_FIRED}),
        newGame: () => dispatch({type: actionTypes.NEW_GAME})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Game);