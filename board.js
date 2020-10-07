// 10 x 10 board
// represent in a two dimensional array
// ex [ [1,2,3,4,5,6,7,8,9,10]
//      [1,2,3,4,5,6,7,8,9,10]

//    ]
// totaly do that in a for loop

// functions of the board --
// hold ship pieces
// change when ship is hit
// hold ships in the bounderies
// display it's state
// undamaged ship with S and damaged with X or "" if nothing there
//

// attempt to place ship in coordinates
// if other ships or sides are in way we cannot place the ship
// else make the array filled with S's where the ship is

class Board {
  constructor() {
    this.board = [];
  }

  createEmptyBoard(size) {
    let boardSize = 10;
    for (let i = 0; i < boardSize; i++) {
      let inner = [];
      for (let z = 0; z < boardSize; z++) {
        inner.push("");
      }
      this.board.push(inner);
    }
  }

  showBoard() {
    console.table(this.board);
  }

  boundaries = (x, y, shiplength, orientation) => {
      let myLength = shiplength;
    if (x + shiplength > this.board.length && orientation !== "horiz") {
      return false;
    } else if (y + shiplength > this.board.length && orientation == "horiz") {
      return false;
    } else {
      if (orientation == "horiz") {
        for (let a = 0; a < myLength; a++) {
          if (this.board[x][y] !== "") {
            return false;
          }
          y++;
        }
      } else {
        for (let a = 0; a < myLength; a++) {
          if (this.board[x][y] !== "") {
            return false;
          }
          x++;
        }
      }

      return true;
    }
  };

  placeShip = (ship) => {
      let {x,y,length,or} = ship
    if (this.boundaries(x, y, length, or) == true) {
      if (or == "horiz") {
        for (let a = 0; a < length; a++) {
          this.board[x][y] = "S";
          y++;
        }
      } else {
        for (let a = 0; a < length; a++) {
          this.board[x][y] = "S";
          x++;
        }
      }
    }
  };
  // return true if we can place a ship else return false
  // loop through the possible coordinates and see if there is a ship present
  // if there is a ship immediately return false
  // if we find no ship return true
  // also if place horiz - check and see if x+ shiplength > board length
  // if place vert - check and see if y+shiplength > board length
}

module.exports = Board

let game = new Board();
// game.createEmptyBoard();
// game.placeShip(5, 5, 3, "horiz");

// game.placeShip(5,5,3, "vert");
// game.showBoard();
