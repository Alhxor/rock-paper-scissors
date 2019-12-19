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

    const choices = (<>
        <Choice
            onClick={() => chooseAction(PAPER)}
            className='icon paper'
            image={images.PAPER}
        />
        <Choice
            onClick={() => chooseAction(SCISSORS)}
            className='icon scissors'
            image={images.SCISSORS}
        />
        <Choice
            onClick={() => chooseAction(ROCK)}
            className='icon rock'
            image={images.ROCK}
        />
    </>)

    const result = (<>
        <Choice
            onClick={() => ''}
            className='icon big'
            image={images[playerAction]}
        />
        
        <div className='winner'>{gameResult}</div>
        <button onClick={() => playAgain()}>Play again</button>

        <Choice
            onClick={() => ''}
            className='icon big'
            image={images[opponentAction]}
        />

    </>)

    if (gameResult)
        return result
    return choices
}
