import React, { Component } from 'react'
import { Player } from './Player'

/* Do we need logic?.. Maybe move it to Player or App */
import {
    calculateScore,
    // getRandomAction
} from '../../logic';

class App extends Component {
    constructor() {
        super()

        this.state = {
            player: new Player('Player'),
            opponent: new Player('Opponent'),
            score: 0 // +1 for player wins, -1 for opponent wins, 0 for draws
        }
    }

    turn() {
        const { player, opponent } = this.state
        player.performRandomAction()
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
