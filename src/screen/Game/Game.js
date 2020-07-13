import React, { Component } from 'react'
import { connect } from 'react-redux'

import Badge from '../../components/Badge/Badge'
import Target from '../../assets/target.png'
import Button from '../../components/UI/Button/Button'
import Shots from '../../components/GameParts/Shots/Shots'
import * as actionTypes from '../../store/actions'

import classes from './Game.module.scss'

class Game extends Component {
    
    state = {
        gameType: "Cluster Shot",
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
        gameDone: false,
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
        this.incrementer = null ;
    }

    handleNextPlayer = () => {
        this.handleStop();
        this.props.newGame();
        let playerList = this.state.players
        this.setState({shotsRemaining: this.props.shots})
        for (let index in playerList) {
            if (index === playerList.length - 1){
                playerList[index] = {...playerList[index], time: this.state.timer}
                this.setState({gameDone: true})
                break;
            }
            if(playerList[index].active === true  && index !== playerList.length-1){
                playerList[index] = {...playerList[index], active: !playerList[index].active}
                playerList[index] = {...playerList[index], time: this.state.timer}
                playerList[parseInt(index) + 1] = {...playerList[parseInt(index) + 1], active: !playerList[parseInt(index) + 1].active}
                this.setState({timer: 0})
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

        console.log(this.props)

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
                        {this.state.players.map((item, index) => (
                            <div key={index} className={[classes.PlayerWrap, item.active ? classes.PlayerActive : ""].join(' ')} >
                                <h2>{item.name}</h2>
                                <p>Score: {item.score}</p>
                                <p >Time: {this.getMin(item.time)}:{this.getSeconds(item.time)}</p>
                            </div>                        
                        ))}
                    </div>
                    <div className={classes.playerCard}>
                        <p className={classes.playerInfo}>{currentPlayer.name}</p>
                        <p className={classes.playerInfo}>Time: {this.getMin(this.state.timer)}:{this.getSeconds(this.state.timer)}</p>
                        <p className={classes.playerInfo}>Score: {currentPlayer.score}</p>
                    </div>
                    <div>
                        <Button BtnStyles={[classes.Button, classes.startBtn].join(' ')} clicked={this.handleStart} disabled={this.state.gameDone}>Start</Button>
                        <Button BtnStyles={[classes.Button, classes.whiteBtn].join(' ')} clicked={this.props.onShotsfired} disabled={!this.state.timer || this.state.gameDone}>Missed Shot</Button>
                        <Button BtnStyles={[classes.Button, classes.NextBtn].join(' ')} clicked={this.props.onShotsfired} disabled={!this.state.timer || this.state.gameDone}>Next Shot</Button>
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
    }
}



const mapDispatchToProps = dispatch => {
    return {
        onShotsfired: () => dispatch({type: actionTypes.SHOT_FIRED}),
        newGame: () => dispatch({type: actionTypes.NEW_GAME})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Game);