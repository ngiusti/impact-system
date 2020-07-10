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
            },
            {
                name: "Player Long Name2",
                score: 200,
                active: false,

            },
            {
                name: "Player Long Name3",
                score: 100,
                active: false,
            }
        ]
    }

    componentDidMount() {
        console.log('hello from Game')
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

    handleNextPlayer = () => {
        
        console.log(this.state.players)
    }

    render() {

        

        return (
            <div className={classes.GameScreen}>
                <div className={classes.TargetProgressWrap}>
                    <div>
                        <h2 className={classes.GameName}>Timer: 5:00</h2>
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
                        <Button BtnStyles={[classes.Button, classes.whiteBtn].join(' ')} clicked={this.handleShot}>Missed Shot</Button>
                        <Button BtnStyles={[classes.Button, classes.NextBtn].join(' ')} clicked={this.handleShot}>Next Shot</Button>
                        <Button BtnStyles={[classes.Button, classes.whiteBtn].join(' ')} clicked={this.handleNextPlayer}>Next Player</Button>
                    </div>
                    <hr style={{ backgroundColor: 'white    '}}/>
                    <div>
                        <Button BtnStyles={classes.Button} linkTo="/GameSelect">New Game</Button>
                        <Button BtnStyles={[classes.Button, classes.whiteBtn].join(' ')} linkTo="/Score">End Game</Button>
                    </div>
                </div>
            </div>
        )
    }
}
