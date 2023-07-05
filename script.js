let game=false;

var playerO=[];
var playerX=[];
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




function appendval(value){
    counter++;
    if(counter%2==0){
    let cell=document.getElementById(value);
    if(cell.innerHTML=='-'){
    cell.innerHTML='X';
playerX.push(value);   
gamestate();
if(counter>8 && game==false){
  alert('Game Draw');
  resetgame();
}

}
    else
    alert('Already occupied cell! Choose another option.');
}
    else{
        let cell=document.getElementById(value);
        if(cell.innerHTML=='-'){
        cell.innerHTML='O';
playerO.push(value);        
gamestate();
if(counter>8 && game==false){
  alert('Game Draw');
  resetgame();
}
    }
        else
        alert('Already occupied cell! Choose another option.');
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
    const cells = document.querySelectorAll('td button');
    cells.forEach(cell => {
      cell.innerHTML = '-';
    });
    playerO=[];
   playerX=[];
   counter=1;
  }