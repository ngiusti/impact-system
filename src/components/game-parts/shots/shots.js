import React, { Component } from 'react'


import classes from './shots.module.scss'


class Shots extends Component {
    render() {
        let shots=[]
        for (let j = 0; j < (this.props.shots - this.props.shotsRemaining); j++) {
            shots.push(<div className={[classes.Bullet, classes.Fired].join(' ')} ></div>);
        }
        for (let i = 0; i < (this.props.shots - (this.props.shots - this.props.shotsRemaining)); i++) {
            shots.push(<div className={classes.Bullet}></div>);
        }


        return (
            <div className={classes.Clip}>
                {shots}
                <div className={classes.ShotCounter}>
                    <h2>{this.props.shotsRemaining}</h2>
                </div>
            </div>
        )
    }
}


export default Shots