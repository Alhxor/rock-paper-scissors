export class Player {
    constructor(name) {
        this.name = name;
        this.action = null;
    }

    getName() { return this.name }
    getCurrentAction() { return this.action }

    performRandomAction(actions = []) {
        if (!actions || !actions.length)
            return null
        const newAction = actions[Math.floor(Math.random() * actions.length)]

        this.action = newAction
        return newAction
    }
}
