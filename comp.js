var playerO=[];
var playerX=[];
let game=false;
let counter=1;
const combs = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];



let random=1;
let flag=0;
function append(value){
    counter++;       
    let cell=document.getElementById(value);
    if(cell.innerHTML=='-'){
    cell.innerHTML='X';
    playerX.push(value); 
    if(counter>=8 && game==false){
        alert('Game Draw');
        resetgame();
      }  
}
else
alert('Already occupied cell! Choose another option.');

while(document.getElementById(random).innerHTML!='-'){
random=Math.floor(Math.random()*9)+1;
}
counter++;
let cell2=document.getElementById(random);
cell2.innerHTML='O';
playerO.push(random.toString());
gamestate();
if(counter>=8 && game==false){
    alert('Game Draw');
    resetgame();
  }
}




function gamestate() {
    
    for (let index = 0; index < combs.length; index++) {
      const [a, b, c] = combs[index];
      if (playerO.includes(a.toString()) && playerO.includes(b.toString()) && playerO.includes(c.toString())) {
        alert('Player O wins!');
        resetgame();
        game=true;
      } else if (playerX.includes(a.toString()) && playerX.includes(b.toString()) && playerX.includes(c.toString())) {
        alert('Player X wins!');
        resetgame();
        game=true;
      }
    }
  }

  function resetgame(){
    playerO=[];
   playerX=[];
   counter=1;
    const cells = document.querySelectorAll('td button');
    cells.forEach(cell => {
      cell.innerHTML = '-';
    });
  }
