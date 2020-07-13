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

    render() {
        return (
            <div>
                <div>
                    <h2>Select a game.</h2>
                </div>
                <div>
                    <h2>Number of players</h2>
                </div>
                <div>
                    <Button linkTo="/Game">Select Game</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        shots: state.shots
    }
}



const mapDispatchToProps = dispatch => {
    return {
        onShotsAdded: (shots) => dispatch({type: actionTypes.SHOTS, numOfShots: shots})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GameSelect);