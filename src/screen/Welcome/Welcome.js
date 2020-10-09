import React, { Component } from 'react'

import classes from  './welcome.module.scss';

import Button from '../../components/UI/button/button'
import Badge from '../../components/badge/badge'

class Welcome extends Component {

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
                    <Button btnStyles={classes.Button} linkTo="/login">Get Started</Button>
                </div>
                <Badge/>
            </div>
        )
    }
}

export default Welcome