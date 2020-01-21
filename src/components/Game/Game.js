import React from 'react'
import './Game.css'

import {Choice} from '../Choice/Choice'

export function Game(props) {
    const { actions, gameResult, playerAction, opponentAction,
            chooseAction, playAgain } = props
    const { PAPER, SCISSORS, ROCK } = actions
    const BACKGROUND = 'BACKGROUND'

    const images = {
        [PAPER]: require('../../../images/icon-paper.svg'),
        [SCISSORS]: require('../../../images/icon-scissors.svg'),
        [ROCK]: require('../../../images/icon-rock.svg'),
        [BACKGROUND]: require('../../../images/bg-triangle.svg')
    }

    const bgStyles = {
        [PAPER]: 'bg-paper',
        [SCISSORS]: 'bg-scissors',
        [ROCK]: 'bg-rock'
    }

    const borderStyles = {
        [PAPER]: 'blue-border',
        [SCISSORS]: 'yellow-border',
        [ROCK]: 'red-border'
    }

    const choices = (
        <div className='game bg-triangle'>
            <Choice
                onClick={() => chooseAction(PAPER)}
                className={`icon normal align-from-center top-left blue-border ${bgStyles.PAPER}`}
            />
            <Choice
                onClick={() => chooseAction(SCISSORS)}
                className={`icon normal align-from-center top-right yellow-border ${bgStyles.SCISSORS}`}
            />
            <Choice
                onClick={() => chooseAction(ROCK)}
                className={`icon normal align-from-center bottom-center red-border ${bgStyles.ROCK}`}
            />
        </div>
    )

    const result = (
        <div className='game'>
            <div className='result-layout'>
                <div className='label w50 float-left'>
                    <p>You picked</p>
                </div>
                <div className='label w50 float-right'>
                    <p>The house picked</p>
                </div>
            </div>

            <div className='result-layout'>
                <div className='label w50 float-left'>
                    <Choice
                        onClick={() => ''}
                        className={`icon big
                            ${borderStyles[playerAction]}
                            ${bgStyles[playerAction]}`}
                    />
                </div>
                <div className='label w50 float-right'>
                    <Choice
                        onClick={() => ''}
                        className={`icon big
                            ${borderStyles[opponentAction]}
                            ${bgStyles[opponentAction]}`}
                    />
                </div>
            </div>
            <div className='label'>
            {gameResult}<br />
            <button onClick={() => playAgain()}>Play again</button>
            </div>
        </div>
    )

    if (gameResult)
        return result
    return choices
}
