/* Might need this at some point */

    startGame() {
        this.setState({
            status: IN_PROGRESS,
            winner: '',
            startButtonEnabled: false,
            turnButtonEnabled: true
        })
    }

    finishGame() {
        const { player, opponent, score } = this.state
        const winner = (score > 0) ? player : opponent

        this.setState({
            status: FINISHED,
            startButtonEnabled: true,
            turnButtonEnabled: false,
            winner: winner.getName()
        })
    }

    newTurn() {
        const { player, opponent } = this.state
        const actions = [ROCK, PAPER, SCISSORS]
        player.performRandomAction(actions)
        opponent.performRandomAction(actions)

        this.updateScore()
    }

    updateScore() {
        const { player, opponent, score, winCondition } = this.state
        const action1 = player.getCurrentAction()
        const action2 = opponent.getCurrentAction()

        const newScore = score + calculateScore(action1, action2)
        this.setState({ score: newScore })

        if (Math.abs(newScore) >= winCondition) // normally should not be '>'
            this.finishGame()
    }
