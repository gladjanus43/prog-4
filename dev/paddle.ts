class Paddle extends GameObject{
    element !: HTMLElement
    constructor(x : number, y : number){
        super(x, y)
        this.element = document.createElement('paddle')
        document.body.appendChild(this.element)
        this.element.style.transform = 'translate('+this.posX+'px, '+this.posY+'px)'
    }

    public move(){
        this.posY -= 10
        this.element.style.transform = 'translate('+this.posX+'px, '+this.posY+'px)'
    } 
    
    getPosY(){
        return this.posY
    }

    public getRectangle(){
        return this.element.getBoundingClientRect()
    }

    removeElement(){
        return this.element.remove()
    }
}