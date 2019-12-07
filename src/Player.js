function actionsAreValid(actions) {
    return (Boolean(actions) || Boolean(actions.length))
}

export class Player {
    constructor(name) {
        this.name = name;
        this.action = null;
    }

    getName() { return this.name }

    getCurrentAction() { return this.action }

    performChosenAction(actions = [], index) {
        if (!actionsAreValid(actions) || index >= actions.length)
            return

        const newAction = actions[index]
        this.action = actions[index]
        return newAction
    }

    performRandomAction(actions = []) {
        if (!actionsAreValid(actions))
            return

        const newAction = actions[Math.floor(Math.random() * actions.length)]

        this.action = newAction
        return newAction
    }
}
