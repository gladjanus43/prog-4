# prog-4
Programmeren 4 eindwebsite

# Classes
In mijn project heb ik natuurlijk gebruik gemaakt van Classes. Als je kijkt in de dev folder vind je allerlei verschillende klasses die gebruikt zijn. Uiteindelijk worden deze classes omgezet naar objecten in game.ts , dit is ook weer een classe die geladen wordt als het spel geladen wordt door window.load

# Encapsulation 

Ook encapsulation heb ik gebruikt in dit project. Encapsulation houdt in of bepaalde dingen publiekelijk te bereiken zijn als je over meerdere klasses werkt of niet. In mijn project heb ik dit vooral gebruikt met functies. De variabelen zou ik ook kunnen afschermen maar voor het idee (en tijdsnood) heb ik nu alleen even de functies public of private gemaakt. 

Ik heb ook een aantal Get en Set functies gebruikt. Als je bijvoorbeeld kijkt naar ball.ts of paddle.ts. Hier zijn een aantal functies die waardes teruggeven die alleen in die klasse bekend is. Je kunt ze vervolgens ook weer Setten door de set functies op te roepen

```
public getPosY(){
        return this.posY
    }
```
Deze functie geeft bijvoorbeeld de Y positie van een paddle terug
```
public move(){
        this.posY -= 10
        this.element.style.transform = 'translate('+this.posX+'px, '+this.posY+'px)'
    } 
```
Met deze code laat ik een paddle bewegen. Je ziet dat ze allebei public zijn waardoor, als er een object van deze klasse is gemaakt, ik ook de functies kan uitvoeren.

# Composition

In dit project heb ik niet een hele ingewikkelde composition gebruikt. De enige composition die in mijn project wordt toegepast is dat er meerdere paddles aan game worden toegevoegd. Deze paddles worden steeds weer verwijdert en opnieuw toegevoegd. De paddles worden opgeslagen in een array.
```
private createPaddles(){
         this.paddles.push(new Paddle(this.randomX(), window.innerHeight))
     }
```

Om de paddles allemaal te laten bewegen loop ik door de hele paddles Array heen en voer ik op iedere paddle in iedere gameLoop een move functie uit
```
for(let i = 0; i<this.paddles.length;i++){
                this.paddles[i].move()
            }
```
Er wordt dus door de hele array geloopt in de gameLoop functie

# Inheritance

Ook inheritance zit in mijn project verwerkt. Ik heb een gameObject gemaakt en deze heeft als eigenschappen een **posX** en **posY**. Deze eigenschappen worden overgenomen door de classen die deze waardes nodig hebben. Dit zijn Paddle en Ball

```
class GameObject{
    protected posX : number = 0
    protected posY : number = 0

    constructor(x : number, y : number){
        this.posX = x
        this.posY = y

        
    }
}

class Paddle extends GameObject{
    constructor(x : number, y : number){
        super(x, y)
    }
}
```
Hier zie je dat de Paddle extends GameObject. Dit betekend dus dat Paddle de constructor overneemt van GameObject. Hierdoor is het dus nog steeds mogelijk om in Paddle **this.posX** aan te roepen, ook al bestaat die variabele helemaal niet in Paddle

# Klassendiagram

[https://github.com/gladjanus43/prog-4/blob/master/diagram.png]

# Review

https://stud.hosted.hr.nl/0950640/2018/06/20/review-ricks-game/

