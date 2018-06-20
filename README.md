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

Om de paddles allemaal te laten bewegen loop ik door de hele paddles Array heen en voer ik op iedere paddle in iedere gameLoop de
```
.move()
```
functie uit
