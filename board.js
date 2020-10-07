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
let board = [];
const createEmptyBoard = function (size) {
  let boardSize = 10;
  for (let i = 0; i < boardSize; i++) {
    let inner = [];
    for (let z = 0; z < boardSize; z++) {
      inner.push("");
    }
    board.push(inner);
  }
};
createEmptyBoard();
console.table(board);
