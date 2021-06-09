/* 
<i class="fas fa-tint"></i> //water drop
<i class="fas fa-dragon"></i> //dragon
<i class="far fa-circle"></i>
<i class="fas fa-times"></i>
*/

const playerFactory = (player, symbol) => {
    return {
        player,
        symbol
    }
};
const game = (() => {
    const player1 = playerFactory("player1", "times");
    const player2 = playerFactory("player2", "circle");
    // the cells picked arrays
    let player1Moves = [];
    let player2Moves = [];

    let gameRound = 0;
    let player1Turn = true; // start off as player 1

    const winningOptions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    handleClick = (e) => {
        //on click do this only once per cell to avoid over writing
        const cell = e.target;
        cell.classList.add("no-click"); //no longer clickable
        
        if (player1Turn) { //if player one's turn
            addIcon(cell,player1Moves); 
            player1Turn = false;
        }
        else{
            addIcon(cell,player2Moves); 
            player1Turn = true;
        }
        gameRoundIncrement(gameRound);
    }
    
    addIcon = (clickedCell, arrClickedCells) =>{
        if (player1Turn){
            clickedCell.classList.remove("grid-square");
            clickedCell.classList.add("grid-square1-clicked");

            clickedCell.innerHTML = `<i class="fas fa-times"></i>`// adding x to cell
        }
        else {
            clickedCell.classList.remove("grid-square");
            clickedCell.classList.add("grid-square2-clicked");

            clickedCell.innerHTML = `<i class="fas fa-circle"></i>`// adding circle to cell

        }
        arrClickedCells.push(clickedCell.id); //adding cells to array
    }
    gameRoundIncrement = (roundNum) =>{
        // can only win after 5 rounds completed, counting to check that.
        roundNum++;
        if (roundNum >= 5){
            //check to see if a winner..
        }
    }
   
    return {
        handleClick,
    };
  })();

//module function for populating game board
const GameBoard = (() => {
    let board = [];
    for(let i = 0; i<9; i++){
        board.push(""); //push empty item to array
    }
    let boardGrid = document.querySelector('.board-grid');

    board.forEach((element,index) => { //for each element in board array, populate DOM
        const boardSquare = document.createElement('div');
        boardSquare.classList.add('grid-square'); 
        boardSquare.setAttribute("id", `${index}`);// index will repesent the specific grid square 0-8
        boardGrid.appendChild(boardSquare);

    });
    
    //adding Event Listeners to each square
    let arrBoardGrid = Array.from(document.querySelectorAll('.grid-square'));
    arrBoardGrid.forEach((element,index)=>{
        element.addEventListener("click", game.handleClick, {once:true});
    });
    
    return{
        arrBoardGrid
    };

})();


