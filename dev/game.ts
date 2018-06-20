class Game{
    ball : Ball
    paddles : Array <Paddle>

    hasHit : boolean
    score : number
    prevScore : any

    scoreMenu : HTMLElement

    counter : number
    interval : number
    constructor(){
        console.log('constr');
        
        this.ball = new Ball(300,200)
        this.paddles = []

        requestAnimationFrame(this.gameLoop.bind(this))
        this.paddles.push(new Paddle(this.randomX(), window.innerHeight))
        
        this.interval = 20
        window.addEventListener('click', this.buttonClickEvent.bind(this))

        this.counter = 0
        // console.log(this.counter);
        

        this.hasHit = false
        this.score = 0;
        this.prevScore = this.getScore()

        this.scoreMenu = document.createElement('score')
        
        this.setPreviousScoreItem()

        // console.log(this.prevScore);        
    }

    public randomNumber(begin : number, end : number){
        let ran = Math.floor(Math.random() * end + begin)
        return ran
    }

    private gameLoop(){
        if(this.hasHit == false){
            this.ball.move()   
            for(let i = 0; i<this.paddles.length;i++){
                this.paddles[i].move()
            }
            this.removePaddles()
            this.checkAllCollisions()
            if(this.counter >= this.interval){
                this.createPaddles()
                this.counter = 0
            }
            this.counter++
            this.interval -= 0.01
        }
        this.scorePoints()
    
        requestAnimationFrame(this.gameLoop.bind(this))
    }

    private checkAllCollisions(){
        let hit
        for(let i=0; i< this.paddles.length; i++){
            hit = this.checkCollision(this.paddles[i].getRectangle(), this.ball.getRectangle())
            if(hit == true){
                this.hasHit = true
                this.showScore()
                if(this.prevScore < this.score){
                    this.setScore(this.score)
                }
            }
        }
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }

     private removePaddles(){
        if(this.paddles[0].getPosY() <= -120){
            this.paddles[0].removeElement()
            this.paddles.splice(0,1)
        }
     }

     private createPaddles(){
         this.paddles.push(new Paddle(this.randomX(), window.innerHeight))
     }
     
     private randomX(){
         return Math.random()* (window.innerWidth - 200)
     }

     private scorePoints(){
         if(this.hasHit == false){
             this.score +=1
         }
     }
     
     private showScore(){
         document.body.appendChild(this.scoreMenu)
         let span = document.createElement('span')
         this.scoreMenu.appendChild(span)
         span.innerHTML = this.score.toString()

         let button = document.createElement('button')
         button.innerHTML = 'restart'
         this.scoreMenu.appendChild(button)
     }

     private setScore(score : number){
        localStorage.setItem('score', score.toString())
    }

     private getScore(){
        return localStorage.getItem('score')
    }

    setPreviousScoreItem(){
        let prev = document.getElementById('score')
        prev!.innerHTML = this.prevScore
    }

    buttonClickEvent(e: any){
        if(e.target.nodeName == 'BUTTON'){
            this.restart() 
        }
    }


    restart(){
        // console.log('restart');
        // let allElements = document.body.childNodes
        
        // for(let i = allElements.length-1; i >= 0; i--){
        //     if(allElements[i].nodeName == 'SPAN' || allElements[i].nodeName == 'PREVSCORE'){
        //         //do nothing
        //     }else{
        //         allElements[i].remove()
        //     }
        // }   
        // console.log(this.constructor);

        window.location.reload()
        

        // this.constructor()
    }
     
}


window.onload = () =>{
    new Game
} 