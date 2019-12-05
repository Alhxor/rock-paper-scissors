import React, { Component } from 'react'
import { calculateScore } from '../../logic';

class App extends Component {
    constructor() {
        super()

        this.state = {
            playerName: "Player",
            score: 0
        }
    }

    render() {
        return (<>
            <header>
                <nav></nav>
            </header>
            <main></main>
            <footer></footer>
        </>)
    }
}

export default App
