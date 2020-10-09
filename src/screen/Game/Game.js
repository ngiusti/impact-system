import React, { Component } from 'react'
import { connect } from 'react-redux'

import Target from '../../assets/target.png'
import Button from '../../components/UI/button/button'
import Shots from '../../components/game-parts/shots/shots'
import * as actionTypes from '../../store/actions'

import classes from './game.module.scss'

class Game extends Component {
    
    state = {
        timer: 0,
        gameDone: false,
        roundStart: false,
        shots: 0,
        imageUrl: "",
        score: "",
    }

    componentDidMount() {
        fetch('/data').then(res => res.json()).then(data => {
            this.setState({shots: data.shots})
            this.setState({score: data.score})
        });
        fetch('/image').then(res => res).then(image => {
            this.setState({imageUrl: image.url})
        });
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
        console.log(this.props.shotsRemaining)
        if(this.props.shotsRemaining === 1){
            this.handleStop();
        }
    }

    missHandler = () => {
        this.shotsHandler()
        let playerList = this.props.players
        for (let index in playerList) {
            if(playerList[index].active === true){
                playerList[index] = {...playerList[index], miss: playerList[index].miss+1}
            }
        }
    }

    hitHandler = () => {
        this.shotsHandler()
        let playerList = this.props.players
        for (let index in playerList) {
            if(playerList[index].active === true){
                playerList[index] = {...playerList[index], hit: playerList[index].hit+1}
            }
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
        // console.log(this.state.shots);
        // console.log(this.state.imageUrl);
        // console.log(this.state.score);
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
                        <img className={classes.Target} src={this.state.imageUrl} alt="Target" />
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
                        <p className={classes.playerScore}>Score: {this.state.score}</p>
                        <p className={classes.playerInfo}>Time: {this.getMin(this.state.timer)}:{this.getSeconds(this.state.timer)}</p>
                    </div>
                    <div>
                        <Button btnStyles={[classes.Button, classes.startBtn].join(' ')} clicked={this.handleStart} disabled={this.state.gameDone || this.state.roundStart}>Start</Button>
                        <Button btnStyles={[classes.Button, classes.whiteBtn].join(' ')} clicked={this.missHandler} disabled={!this.state.timer || this.state.gameDone || this.props.shotsRemaining == 0}>Missed Shot</Button>
                        <Button btnStyles={[classes.Button, classes.NextBtn].join(' ')} clicked={this.hitHandler} disabled={!this.state.timer || this.state.gameDone || this.props.shotsRemaining == 0}>Next Shot</Button>
                    </div>
                    <hr style={{ backgroundColor: 'white'}}/>
                    <div>
                        <Button btnStyles={[classes.Button, classes.whiteBtn].join(' ')} clicked={this.handleNextPlayer} disabled={this.state.gameDone}>Next Player</Button>
                        <Button btnStyles={classes.Button} clicked={() => this.props.newGame()} linkTo="/GameSelect">New Session</Button>
                        <Button btnStyles={[classes.Button, classes.whiteBtn].join(' ')} linkTo="/Score">End Session</Button>
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