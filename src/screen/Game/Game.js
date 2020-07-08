import React, { Component } from 'react'

export default class Game extends Component {

    componentDidMount() {
        console.log('hello from Game')
    }

    render() {
        return (
            <div>
                <h1>Hello from game</h1>
            </div>
        )
    }
}
