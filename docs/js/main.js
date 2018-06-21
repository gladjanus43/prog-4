"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameObject = (function () {
    function GameObject(x, y) {
        this.posX = 0;
        this.posY = 0;
        this.posX = x;
        this.posY = y;
    }
    return GameObject;
}());
var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball(x, y) {
        var _this = _super.call(this, x, y) || this;
        _this.element = document.createElement('ball');
        document.body.appendChild(_this.element);
        window.addEventListener("mousemove", _this.mouseMovement.bind(_this));
        return _this;
    }
    Ball.prototype.mouseMovement = function (e) {
        this.posX = e.clientX;
        this.posY = e.clientY;
    };
    Ball.prototype.move = function () {
        this.element.style.transform = 'translate(' + this.posX + 'px, ' + this.posY + 'px)';
    };
    Ball.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    return Ball;
}(GameObject));
var StartScreen = (function () {
    function StartScreen() {
        this.pause = true;
        this.startButton = document.createElement('startGame');
        document.body.appendChild(this.startButton);
        this.startButton.innerHTML = 'Start de game';
        this.startButton.addEventListener('click', this.clickedButton.bind(this));
    }
    StartScreen.prototype.clickedButton = function () {
        this.startButton.remove();
        this.pause = false;
    };
    return StartScreen;
}());
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        console.log('constr');
        _this.ball = new Ball(300, 200);
        _this.paddles = [];
        requestAnimationFrame(_this.gameLoop.bind(_this));
        _this.paddles.push(new Paddle(_this.randomX(), window.innerHeight));
        _this.interval = 20;
        window.addEventListener('click', _this.buttonClickEvent.bind(_this));
        _this.counter = 0;
        _this.hasHit = false;
        _this.score = 0;
        _this.prevScore = _this.getScore();
        _this.scoreMenu = document.createElement('score');
        _this.setPreviousScoreItem();
        return _this;
    }
    Game.prototype.randomNumber = function (begin, end) {
        var ran = Math.floor(Math.random() * end + begin);
        return ran;
    };
    Game.prototype.gameLoop = function () {
        if (this.pause === false) {
            if (this.hasHit == false) {
                this.ball.move();
                for (var i = 0; i < this.paddles.length; i++) {
                    this.paddles[i].move();
                }
                this.removePaddles();
                this.checkAllCollisions();
                if (this.counter >= this.interval) {
                    this.createPaddles();
                    this.counter = 0;
                }
                this.counter++;
                this.interval -= 0.01;
            }
            this.scorePoints();
        }
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    Game.prototype.checkAllCollisions = function () {
        var hit;
        for (var i = 0; i < this.paddles.length; i++) {
            hit = this.checkCollision(this.paddles[i].getRectangle(), this.ball.getRectangle());
            if (hit == true) {
                this.hasHit = true;
                this.showScore();
                if (this.prevScore < this.score) {
                    this.setScore(this.score);
                }
            }
        }
    };
    Game.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    Game.prototype.removePaddles = function () {
        if (this.paddles[0].getPosY() <= -120) {
            this.paddles[0].removeElement();
            this.paddles.splice(0, 1);
        }
    };
    Game.prototype.createPaddles = function () {
        this.paddles.push(new Paddle(this.randomX(), window.innerHeight));
    };
    Game.prototype.randomX = function () {
        return Math.random() * (window.innerWidth - 200);
    };
    Game.prototype.scorePoints = function () {
        if (this.hasHit == false) {
            this.score += 1;
        }
    };
    Game.prototype.showScore = function () {
        document.body.appendChild(this.scoreMenu);
        var span = document.createElement('span');
        this.scoreMenu.appendChild(span);
        span.innerHTML = this.score.toString();
        var button = document.createElement('button');
        button.innerHTML = 'restart';
        this.scoreMenu.appendChild(button);
    };
    Game.prototype.setScore = function (score) {
        localStorage.setItem('score', score.toString());
    };
    Game.prototype.getScore = function () {
        return localStorage.getItem('score');
    };
    Game.prototype.setPreviousScoreItem = function () {
        var prev = document.getElementById('score');
        prev.innerHTML = this.prevScore;
    };
    Game.prototype.buttonClickEvent = function (e) {
        if (e.target.nodeName == 'BUTTON') {
            this.restart();
        }
    };
    Game.prototype.restart = function () {
        window.location.reload();
    };
    return Game;
}(StartScreen));
window.onload = function () {
    new Game();
};
var Paddle = (function (_super) {
    __extends(Paddle, _super);
    function Paddle(x, y) {
        var _this = _super.call(this, x, y) || this;
        _this.element = document.createElement('paddle');
        document.body.appendChild(_this.element);
        _this.element.style.transform = 'translate(' + _this.posX + 'px, ' + _this.posY + 'px)';
        return _this;
    }
    Paddle.prototype.move = function () {
        this.posY -= 10;
        this.element.style.transform = 'translate(' + this.posX + 'px, ' + this.posY + 'px)';
    };
    Paddle.prototype.getPosY = function () {
        return this.posY;
    };
    Paddle.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    Paddle.prototype.removeElement = function () {
        return this.element.remove();
    };
    return Paddle;
}(GameObject));
//# sourceMappingURL=main.js.map