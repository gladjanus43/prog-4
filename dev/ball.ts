/// <reference path="gameObject.ts"/>
class Ball extends GameObject{
    element : HTMLElement
    constructor(x:number, y:number){
        super(x, y)
        this.element = document.createElement('ball')
        document.body.appendChild(this.element)
        window.addEventListener("mousemove", this.mouseMovement.bind(this))
    }

    public mouseMovement(e:MouseEvent){
        this.posX = e.clientX
        this.posY = e.clientY
    }

    public move(){
        this.element.style.transform = 'translate('+this.posX+'px, '+ this.posY+'px)'        
    }   

    public getRectangle(){
        return this.element.getBoundingClientRect()
    }

    
}