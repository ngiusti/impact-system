import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../../components/UI/Button/Button'
import * as actionTypes from '../../store/actions'
import * as actionCreators from '../../store/actionCreators'


class GameSelect extends Component {

    state = {
        name: '',
    }

    componentDidMount() {
        console.log('hello from GameSelect')
    }

    propsFunc = () => {
        console.log(this.props);
    }

    handleInputChange(event, index) {
        const value = event.target.value;
        console.log(value);
        this.setState({name: value})
    }

    changeNameHandler = () => {

        this.props.playerAdded(
            { 
                name: this.state.name,
                score: 300,
                active: true,
                time: 0,
            }
        );
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Select a game.</h2>
                </div>
                <div>
                    <h2>Number of players</h2>
                    {this.props.players.length}
                    <Button clicked={this.props.playerAdded} disabled={this.props.players.length >= 3 ? true : false}>Add Player</Button>
                    {this.props.players.map((player, index) => (
                        <React.Fragment key={index}>
                            <h2>{player.name} {index}</h2>
                            <form>
                                <input onChange={(event) => this.handleInputChange(event, index)} />
                            </form>
                            <Button  clicked={() => this.props.playerRemoved(index)}>Remove Player</Button>
                            <button onClick={this.changeNameHandler}>clicked</button>
                        </React.Fragment>
                    ))}
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
        playerAdded: (player) => dispatch({type: actionTypes.ADD_PLAYER, newPlayer:  player}),
        playerRemoved: (index) => dispatch(actionCreators.removePlayer(index)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GameSelect);