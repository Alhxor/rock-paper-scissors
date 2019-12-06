import actions from './data/actions';
const { ROCK, PAPER, SCISSORS } = actions;

import { calculateScore, getRandomAction } from './logic.js'

it('Runs without crashing provided correct arguments', () =>
    expect(calculateScore(ROCK, ROCK)).toBe(0))

it('Generates a random action', () =>
    expect([ROCK, PAPER, SCISSORS]).toContain(getRandomAction()))

describe('Scoring for base game', () => {
    it('Rock > Scissors', () => expect(calculateScore(ROCK, SCISSORS)).toBe(1))
    it('Paper > Rock', () => expect(calculateScore(PAPER, ROCK)).toBe(1))
    it('Scissors > Paper', () => expect(calculateScore(SCISSORS, PAPER)).toBe(1))
    it('Rock < Paper', () => expect(calculateScore(ROCK, PAPER)).toBe(-1))
    it('Paper < Scissors', () => expect(calculateScore(PAPER, SCISSORS)).toBe(-1))
    it('Scissors < Rock', () => expect(calculateScore(SCISSORS, ROCK)).toBe(-1))
    it('Rock = Rock', () => expect(calculateScore(ROCK, ROCK)).toBe(0))
    it('Paper = Paper', () => expect(calculateScore(PAPER, PAPER)).toBe(0))
    it('Scissors = Scissors', () => expect(calculateScore(SCISSORS, SCISSORS)).toBe(0))
})
