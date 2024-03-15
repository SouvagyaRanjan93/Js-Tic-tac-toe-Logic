// let a= prompt("enter your name");
// alert(a);
var board=[
    '-','-','-','-','-','-','-','-','-'
]

var player ='X';
//printboard
function showBoard()
 {
  console.log(board[0],board[1],board[2])
  console.log(board[3],board[4],board[5])
  console.log(board[6],board[7],board[8]) 
}
//user move update 
function changeBoard(pos, player)
{
    if(board[pos]=='-')
    {
        board[pos] = player
        showBoard();
    }
    else {
        alert("Invalid Move");
    }
}
//function to flip the turn
function flipTurn(){
    if(player == 'X'){
        player = 'O';
    }
    else player = 'X';
}
//function to check player to win
function checkWins(player){
    //1st row
     if(board[0]==player && board[1]==player && board[2]==player){
        return true;
     } 
     //2nd row  
     if(board[3]==player && board[4]==player && board[5]==player){
       return true;
     } 
      //3nd row  
      if(board[6]==player && board[7]==player && board[8]==player){
       return true;
     } 
      //1st col  
      if(board[0]==player && board[3]==player && board[6]==player){
       return true;
     } 
      //2nd col  
      if(board[1]==player && board[4]==player && board[7]==player){
       return true;
     }  //3rd col  
     if(board[2]==player && board[5]==player && board[8]==player){
       return true;
     } 
      //1st diagonal   
      if(board[0]==player && board[4]==player && board[8]==player){
       return true;
     } 
      //2nd dia  
      if(board[2]==player && board[4]==player && board[6]==player){
       return true;
     } 

     else return false;

}

function checkDraw(){
    var a = checkWins('x');
    var b = checkWins('y');
    
    if(a==false && b==false){
         var count = 0
         for(var i = 0; i<=8; i++){
            if (board[i]=='-')
              count+=1
         }
         if (count==0) return true;

    }
    return false;
}

//main Game
// while(true){
//     let pos = prompt(player +" : turn")
//     pos =pos*1

//      changeBoard(pos, player)
//     let temp = checkWins(player)
//     //if wins
//     if(temp==true){
//         alert(player + " wins the Game!")
//         break;
//     }

//     //Check the game is draw
//     let d = checkDraw()
//     if(d==true)
//     {
//         alert("Game id draw");
//         break;
//     }

//     flipTurn()

// }