import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../../components/UI/Button/Button'
import * as actionTypes from '../../store/actions'
import * as actionCreators from '../../store/actionCreators'
import man from '../../assets/man-sil.png'

import classes from './GameSelect.module.scss'

class GameSelect extends Component {

    state = {
        player: "",
        players: [],
    }

    componentDidMount() {
        if(this.props.players){
            
            this.setState({players: this.props.players})
        }
    }

    handleInputChange(event) {
        this.setState({player: event.target.value})
    }

    addPlayerHandler = () => {
        let player = this.makePlayerHandler(this.state.player)
        this.setState({ players: [...this.state.players, player] })
    }

    makePlayerHandler = (player) => {
        let playerModel = {
            name: player,
            score: 0,
            active: this.state.players.length === 0 ?  true : false,
            time: 0,
            hit: 0,
            miss: 0,
        }
        return playerModel
    }

    removeHandler= (idx) => {
        var array = [...this.state.players]; // make a separate copy of the array
        if (idx !== -1) {
          array.splice(idx, 1);
          this.setState({players: array});
        }
    }

    render() {

        return (
            <div>
                <div>
                    <h2 className={classes.Header}>Number of players: {this.state.players.length}</h2>
                    <div className={classes.PlayersWrap}>
                        {this.state.players.map((item, index) => (
                            <div key={index} className={classes.CardWrap} onClick={() => this.removeHandler(index)}>
                                <div className={classes.ImageWrap}>
                                    <img className={classes.Image} src={man} alt="Man" />
                                </div>
                                <h2 className={classes.Name}>{item.name}</h2>
                            </div>                        
                        ))}
                    </div>

                    <div className={classes.PlayerInputWrap}>
                        <input className={classes.Input} onChange={(event) => this.handleInputChange(event)} />
                        <Button btnStyles={classes.Button} clicked={this.addPlayerHandler} disabled={this.state.players.length >= 3 ? true : false || !this.state.player}>Add Player</Button>
                    </div>
                </div>
                <div>
                    <Button linkTo="/Game" clicked={() => this.props.playersAdded(this.state.players)} disabled={this.state.players.length == 0 ? true : false}>Start Session</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        shots: state.shots,
        shotsRemaining: state.shotsRemaining,
        players: state.players
    }
}



const mapDispatchToProps = dispatch => {
    return {
        onShotsAdded: (shots) => dispatch({type: actionTypes.SHOTS, numOfShots: shots}),
        playersAdded: (players) => dispatch({type: actionTypes.ADD_PLAYERS, newPlayers:  players}),
        playerRemoved: (index) => dispatch(actionCreators.removePlayer(index)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GameSelect);