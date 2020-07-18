import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../../components/UI/Button/Button'
import * as actionTypes from '../../store/actions'
import * as actionCreators from '../../store/actionCreators'


class GameSelect extends Component {

    state = {
        player: "",
        players: [],
    }

    componentDidMount() {
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
        console.log(this.state.players.length);
        return playerModel
    }

    render() {
        console.log(this.state);
        console.log(this.props.players);
        return (
            <div>
                <div>
                    <h2>Select a game.</h2>
                </div>
                <div>
                    <h2>Number of players: {this.state.players.length}</h2>

                    <form>
                        <input onChange={(event) => this.handleInputChange(event)} />
                    </form>
                    <Button clicked={this.addPlayerHandler} disabled={this.state.players.length >= 3 ? true : false}>Add Player</Button>

                </div>
                <div>
                    <Button linkTo="/Game" clicked={() => this.props.playersAdded(this.state.players)} disabled={this.state.players.length == 0 ? true : false}>Select Game</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        shots: state.shots,
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