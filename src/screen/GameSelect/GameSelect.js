import React, { Component } from 'react'

import Button from '../../components/UI/Button/Button'

export default class GameSelect extends Component {

    componentDidMount() {
        console.log('hello from GameSelect')
    }

    render() {
        return (
            <div>
                <h1>Hello from game Select</h1>
                <div>
                    <Button linkTo="/Game">Select Game</Button>
                </div>
            </div>
        )
    }
}
