import './App.css'

import React, { Component } from 'react'

import { Game } from '../Game/Game'

import { ACTIONS } from '../../data/constants'
const { ROCK, PAPER, SCISSORS } = ACTIONS

import { calculateScore, getRandomAction } from '../../logic'

const imgPath = '../../../images/';

class App extends Component {
    constructor() {
        super()

        this.state = {
            score: 0, // +1 for player wins, -1 for opponent wins, 0 for draws
            gameResult: '',
            pcAction: '',
            playerAction: null
            // turnHistory: [], // can store state history here
        }
    }

    announceWinner(playerChoice) {
        const opponentChoice = getRandomAction()
        const roundScore = calculateScore(playerChoice, opponentChoice)
        const newScore = this.state.score + roundScore

        let result = ''
        switch(roundScore) {
            case 1: result = 'You win!'; break
            case 0: result = 'Draw!'; break
            case -1: result = 'You lose!'; break
            default: result = 'Unknown result'
        }

        this.setState({
            score: newScore,
            gameResult: result,
            playerAction: playerChoice,
            pcAction: opponentChoice
        })
    }

    newRound() {
        this.setState({
            gameResult: ''
        })
    }

    render() {
        const {
            score,
            gameResult,
            pcAction,
            playerAction
         } = this.state

        return (<>
            <header>
                <img src={`${imgPath}logo.svg`} className='logo' />
                <div className='score'>
                    SCORE
                    <div className='scoreNumber'>{score}</div>
                </div>
            </header>
            <main style={{backgroundImage: `url(${imgPath}bg-triangle.svg)`}}>
                <Game
                    actions={ACTIONS}
                    imgPath={imgPath}
                    gameResult={gameResult}
                    playerAction={playerAction}
                    opponentAction={pcAction}
                    chooseAction={(choice) => this.announceWinner(choice)}
                    playAgain={() => this.newRound()}
                />
            </main>
            <footer>
            </footer>
        </>)
    }
}

export default App
