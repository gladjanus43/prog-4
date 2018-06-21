class StartScreen{
    startButton : HTMLElement
    pause : boolean
    constructor(){
        this.pause = true
        this.startButton = document.createElement('startGame')
        document.body.appendChild(this.startButton)
        this.startButton.innerHTML = 'Start de game'
        this.startButton.addEventListener('click', this.clickedButton.bind(this))
    }

    clickedButton(){
        this.startButton.remove()
        this.pause = false
    }
}

