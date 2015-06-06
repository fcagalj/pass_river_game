// Enemies our player must avoid
var Enemy;
Enemy = function (x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    /*
     The Enemy function, which initiates the Enemy by:

     Loading the image by setting this.sprite to the appropriate image in the image folder (already provided)
     Setting the Enemy initial location (you need to implement)
     Setting the Enemy speed (you need to implement)

     The update method for the Enemy

     Updates the Enemy location (you need to implement)
     Handles collision with the Player (you need to implement)
     */
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed=speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    if((this.x+=(this.speed*dt))>(numRows*83)){
        this.x=0;
    }else{
        this.x+=(this.speed*dt);
    }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    /*
     The update method for the Enemy

     Updates the Enemy location (you need to implement)
     Handles collision with the Player (you need to implement)
     */
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

/*************************************/
/////klasa Player
var Player = function (x,y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
}
Player.prototype.update=function(key){
    switch (key) {
    case 'up':
        this.y-=10;
        break;
    case 'down':
        this.y+=10;
        break;
    case 'left':
        this.x-=10;
        break;
    case 'right':
        this.x+=10;
        break;
    default:

    }
}
Player.prototype.render = function() {
    //console.log('Lodani resurs:  '+Resources.get(this.sprite)+Resources.get(this.sprite).get);
    //console.log('this position x='+this.x+' y='+this.y+' this type of '+(typeof this));
    //ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
Player.prototype.handleInput=function(key){
    this.update(key);
    console.log('Player pressd: '+key)
}
/*************************************/
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//var allEnemies=new Array();
var allEnemies=[];

var numRows = 6;
var numCols = 5;

for(var i=0;i<4;i++){
    var enemy=new Enemy(0, randomInt(1,((numCols-1))*83), (randomInt(2,7)*20));
    allEnemies.push(enemy);
}

var player=new Player(4*83,4*101);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
}, true);

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}