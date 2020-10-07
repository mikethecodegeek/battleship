// Properties
// Length;
// Maybe a cool name
// Keep track of damage taken
    // Total health
    // Keep track of spot that was hit (possibly be part of the board but put here for now)

// Methods
// TakeHit
// PlaceOnBoard 

let Board = require('./board')

class Ship {
    constructor(length){
        this.length = length;
        // this.name = name;
        this.health=length;   
    }
    
    takeHit() {
        this.health--;
    }
    placeOnBoard(x,y,or) {
        this.x = x;
        this.y = y;
        this.or = or;
    }

    getBoardPlacement() {
        return {x: this.x,y:this.y,or:this.or,length:this.length}
    }
}

let first = new Ship(3);
let sec = new Ship(4);

first.placeOnBoard(5,5,'horiz');
sec.placeOnBoard(3,3,'vert')

let game= new Board;
game.createEmptyBoard()
game.placeShip(first)
game.placeShip(sec)


game.showBoard()

