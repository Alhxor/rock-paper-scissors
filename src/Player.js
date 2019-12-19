function actionsAreValid(actions) {
    return (Boolean(actions) || Boolean(actions.length))
}

export class Player {
    constructor(name) {
        this.name = name;
        this.action = null;
    }

    performRandomAction(actions = []) {
        if (!actionsAreValid(actions))
            return

        const newAction = actions[Math.floor(Math.random() * actions.length)]

        this.action = newAction
        return newAction
    }
}
