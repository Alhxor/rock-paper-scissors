export class Player {
    constructor(name) {
        this.name = name;
        this.action = null;
    }

    performRandomAction(actions = []) {
        if (!actions || !actions.length)
            return null
        const newAction = actions[Math.floor(Math.random() * actions.length)]
        
        this.action = newAction
        return newAction
    }
}
