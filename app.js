/* 
<i class="fas fa-tint"></i> //water drop
<i class="fas fa-dragon"></i> //dragon
*/

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

})();