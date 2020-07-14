import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../../components/UI/Button/Button'
import * as actionTypes from '../../store/actions'

// console.log(store.getState());
// store.dispatch({type:'SHOTS', shots: 20})
// store.dispatch({type:'ADD_PLAYER', newPlayer:{
//     name: "Player Long Name",
//     score: 300,
//     active: true,
//     time: 0,
//   },
// })
// store.dispatch({type: 'SELECT_GAME', gameType: 'Cluster Shot'})
// console.log(store.getState());


class GameSelect extends Component {

    componentDidMount() {
        console.log('hello from GameSelect')
    }

    propsFunc = () => {
        console.log(this.props);
    }

    render() {
        console.log(this.props.players)
        return (
            <div>
                <div>
                    <h2>Select a game.</h2>
                </div>
                <div>
                    <h2>Number of players</h2>
                    {this.props.players.length}
                    <Button clicked={this.props.playerAdded} disabled={this.props.players.length >= 3 ? true : false}>Add Player</Button>
                    <Button clicked={this.props.playerRemoved} disabled={this.props.players.length < 1 ? true : false}>Remove Player</Button>
                </div>
                <div>
                    <Button linkTo="/Game" disabled={this.props.players.length == 0 ? true : false}>Select Game</Button>
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
        playerAdded: () => dispatch({
            type: actionTypes.ADD_PLAYER,
            newPlayer:{
                name: "Player Long Name",
                score: 300,
                active: true,
                time: 0,
        },}),
        playerRemoved: (players) => dispatch({type: actionTypes.REMOVE_PLAYER}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GameSelect);