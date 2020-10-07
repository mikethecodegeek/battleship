const { userInfo } = require("os");
const Game = require("./game")
//choose they amount of ships they want 
//choose the size of game board 
//choose where they want their ships 
//choose where they want to hit 

//properties 
//randomize ship placement  
//where they want to attack 

//player starts with 5 ships
//player starts with 10*10 board 

const readline = require("readline");
const Board = require("./board")

const rl = readline.createInterface(process.stdin, process.stdout);

class User{
    constructor(name){
        this.name = name;
    }

    askQuestion(){
        rl.question("What column would you like to hit?", (answer) => {
            let x = answer;
            
            rl.question("What row would you like to hit?", (answer) =>{
                let y = answer;
                Game.Bomb(x,y)
    
            });
        });

    }
}

module.exports = User;
