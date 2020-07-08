import React, { Component } from 'react'

import classes from  './Welcome.module.scss';

import Button from '../../components/UI/Button/Button'
import Badge from '../../components/Badge/Badge'

export default class Welcome extends Component {

    componentDidMount() {
        console.log('hello from welcome')
    }

    render() {
        return (
            <div>
                <div className={classes.TitleWrap}>
                    <h1 className={classes.Title}>Impact System</h1>
                </div>
                <div>
                    <Button btnStyles={classes.Button} linkTo="/GameSelect">Get Started</Button>
                </div>
                <Badge/>
            </div>
        )
    }
}
