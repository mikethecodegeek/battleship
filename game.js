let Ship = require("./ship")
let Board = require("./board");
let User = require("./user")


let game = new Board();
game.createEmptyBoard();
game.showBoard();
// let user = new User();
// user.askQuestion();

module.exports = game;