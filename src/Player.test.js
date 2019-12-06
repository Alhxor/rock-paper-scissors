import { Player } from './Player'

it('Creates a player', () => expect(new Player('Joe')).toHaveProperty('name', 'Joe'))
it('Player performs a random action from the given array', () => {
    const actions = ['ROCK', 'PAPER', 'SCISSORS']
    const player = new Player('Joe')
    let performedActions = []

    console.log('Performing 5 random rolls:')
    for (let i = 5; i > 0; i--) {
        player.performRandomAction(actions)

        let newAction = player.action
        performedActions = [...performedActions, newAction]
        console.log(`Roll #${6-i}: ${newAction}`)
    }

    expect(actions).toContain(performedActions[0]);
    expect(actions).toContain(performedActions[1]);
    expect(actions).toContain(performedActions[2]);
    expect(actions).toContain(performedActions[3]);
    expect(actions).toContain(performedActions[4]);
})
