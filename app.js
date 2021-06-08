/* 
<i class="fas fa-tint"></i> //water drop
<i class="fas fa-dragon"></i> //dragon
<i class="far fa-circle"></i>
<i class="fas fa-times"></i>
*/

const playerFactory = () => {
    let player1 = true;
    let player2 = false;

   return {
       player1
   }

};
const gameFactory = () => {
    //make sure correct player clicked

    //make sure not a winning move

    //play round

  };

//module function for populating game board
const GameBoard = (() => {
    let board = [];
    for(let i = 0; i<9; i++){
        board.push(""); //push empty item to array
    }
    let boardGrid = document.querySelector('.board-grid');

    board.forEach((element,index) => { //for each element in board array, populate DOM
        const boardSquare = document.createElement('div');
        boardSquare.classList.add('grid-square', `${index}`); // index will repesent the specific grid square 0-8
        boardGrid.appendChild(boardSquare);

    });
    //adding Event Listeners to each square
    let arrBoardGrid = Array.from(document.querySelectorAll('.grid-square'));
    arrBoardGrid.forEach((element,index)=>{
        element.addEventListener("click", (e) =>{
            if (playerFactory.player1){
                
                console.log(e.target);
            }
        
        })
    });


    return{
        arrBoardGrid
    };

})();


