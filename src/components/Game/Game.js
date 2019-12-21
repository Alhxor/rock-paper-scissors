import React from 'react'
import './Game.css'

import {Choice} from '../Choice/Choice'

export function Game(props) {
    const { actions, imgPath, gameResult, playerAction, opponentAction,
            chooseAction, playAgain } = props
    const { PAPER, SCISSORS, ROCK } = actions

    const images = {
        [PAPER]: `${imgPath}icon-paper.svg`,
        [SCISSORS]: `${imgPath}icon-scissors.svg`,
        [ROCK]: `${imgPath}icon-rock.svg`
    }

    const borderStyles = {
        [PAPER]: 'blue-border',
        [SCISSORS]: 'yellow-border',
        [ROCK]: 'red-border'
    }

    const choices = (
        <div
            className='game'
            style={{backgroundImage: `url(${imgPath}bg-triangle.svg)`}}
        >
            <Choice
                onClick={() => chooseAction(PAPER)}
                className='icon normal align-from-center top-left blue-border'
                image={images.PAPER}
            />
            <Choice
                onClick={() => chooseAction(SCISSORS)}
                className='icon normal align-from-center top-right yellow-border'
                image={images.SCISSORS}
            />
            <Choice
                onClick={() => chooseAction(ROCK)}
                className='icon normal align-from-center bottom-center red-border'
                image={images.ROCK}
            />
        </div>
    )

    const result = (
        <div className='game'>
            <div className='result-layout'>
                <div className='label w40 float-left'>You picked
                </div>
                <div className='label w40 column float-right'>The house picked</div>
            </div>

            <Choice
            onClick={() => ''}
            className={`icon big align-from-center left-middle
                ${borderStyles[playerAction]}`}
                image={images[playerAction]}
                />

            <div className='label align-from-center center-middle'>
                {gameResult}<br />
                <button onClick={() => playAgain()}>Play again</button>
            </div>

            <Choice
                onClick={() => ''}
                className={`icon big align-from-center right-middle
                            ${borderStyles[opponentAction]}`}
                image={images[opponentAction]}
            />
        </div>
    )

    if (gameResult)
        return result
    return choices
}
