import actions from './data/actions';
const { ROCK, PAPER, SCISSORS } = actions;
/** Returns 1 if action1 is stronger than action2, 0 if equal and -1 otherwise
    TODO: Use hashmap instead of switch
*/
export function calculateScore(action1, action2) {
    // console.log(`action1: ${action1}    action2: ${action2}`)

    if (action1 === action2)
        return 0;

    switch (action1) {
        case ROCK: return (action2 === SCISSORS) ? 1 : -1
        case PAPER: return (action2 === ROCK) ? 1 : -1
        case SCISSORS: return (action2 === PAPER) ? 1 : -1
        default: throw `Unknown action: ${action1}`
    }
}
