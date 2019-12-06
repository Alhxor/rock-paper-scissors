import actions from './actions';
const { ROCK, PAPER, SCISSORS } = actions;
// import { ROCK, PAPER, SCISSORS } from './actions';
//
it('imports actions as a whole', () => {
    expect(actions).toMatchObject({
        ROCK: 'ROCK',
        PAPER: 'PAPER',
        SCISSORS: 'SCISSORS'
    })
})

it('imports individual actions', () => {
    expect(ROCK).toBe(actions.ROCK)
})
