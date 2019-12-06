import React, { Component } from 'react'
import { Player } from '../../Player'
import { calculateScore } from '../../logic'

import { ACTIONS, GAME_STATUS } from '../../data/constants'

const { NOT_STARTED, IN_PROGRESS, FINISHED } = GAME_STATUS
const { ROCK, PAPER, SCISSORS } = ACTIONS

class App extends Component {
    constructor() {
        super()

        this.state = {
            status: NOT_STARTED,
            player: new Player('Player'),
            opponent: new Player('Opponent'),
            score: 0, // +1 for player wins, -1 for opponent wins, 0 for draws
            winCondition: 3, // game ends on score = abs(winCondition)
            turnHistory: [], // can store state history here

            // Children UI state
            startButtonEnabled: true,
            turnButtonEnabled: false,
            winner: ''
        }
    }

    startGame() {
        this.setState({
            status: IN_PROGRESS,
            winner: '',
            startButtonEnabled: false,
            turnButtonEnabled: true
        })
    }

    finishGame() {
        const { player, opponent, score } = this.state
        const winner = (score > 0) ? player : opponent

        this.setState({
            status: FINISHED,
            startButtonEnabled: true,
            turnButtonEnabled: false,
            winner: winner.getName()
        })
    }

    newTurn() {
        const { player, opponent } = this.state
        const actions = [ROCK, PAPER, SCISSORS]
        player.performRandomAction(actions)
        opponent.performRandomAction(actions)

        this.updateScore()
    }

    updateScore() {
        const { player, opponent, score, winCondition } = this.state
        const action1 = player.getCurrentAction()
        const action2 = opponent.getCurrentAction()

        const newScore = score + calculateScore(action1, action2)
        this.setState({ score: newScore })

        if (Math.abs(newScore) >= winCondition) // normally should not be '>'
            this.finishGame()
    }

    render() {
        const {
            startButtonEnabled,
            turnButtonEnabled,
            player,
            opponent,
            status,
            score,
            winner
         } = this.state
        return (<>
            <header>
                <nav></nav>
            </header>
            <main>
                <p>Game state: {status}</p>
                <p>{player.getName()} vs. {opponent.getName()}</p>
                <p>{player.getCurrentAction()} vs. {opponent.getCurrentAction()}</p>
                <button onClick={() => this.startGame()}
                        disabled={!startButtonEnabled}>
                    Start game
                </button>
                <button onClick={() => this.newTurn()}
                        disabled={!turnButtonEnabled}>
                    Next round
                </button>
                <p>Score: {score}</p>
                <p>Winner: {winner}</p>
            </main>
            <footer>
            </footer>
        </>)
    }
}

export default App
