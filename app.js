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
            const currentPlayer = "player1"
            player1Turn = false; //after click, player1Turn is false
            nextTurn(player1Turn);
            addIcon(cell); 
            checkWin(currentPlayer);

        }
        else{
            const currentPlayer = "player2"
            player1Turn = true;
            nextTurn(player1Turn);
            addIcon(cell); 
            checkWin( currentPlayer);

        }
    }
    /* player2HoverColor = () =>{
        if (player1Turn){
            GameBoard.arrBoardGrid.forEach((element,index)=>{
                
            });
        }
    } */

    checkWin = (player) =>{
        let containsClass = "";
        if (player == "player1"){
            containsClass= "grid-square1-clicked"
        }
        else {
            containsClass= "grid-square2-clicked"

        }
        winningOptions.forEach((element, index) => { 
            if (GameBoard.arrBoardGrid[element[0]].classList.contains(containsClass) && GameBoard.arrBoardGrid[element[1]].classList.contains(containsClass) && GameBoard.arrBoardGrid[element[2]].classList.contains(containsClass)) {
                console.log("winner");
            }
        });
    }

    nextTurn = (player1Turn) => {
        const playingPlayer = document.querySelector(".player-number");
        if (!player1Turn){ //if player one is false, they have already clicked, so display player 2
            playingPlayer.textContent = "Player 2";
        }
        else {
            playingPlayer.textContent = "Player 1";

        }
    }

    addIcon = (clickedCell, arrClickedCells) =>{
        if (!player1Turn){ //meaning player1 already clicked, so player1Turn is now false
            clickedCell.classList.remove("grid-square");
            clickedCell.classList.add("grid-square1-clicked");

            clickedCell.innerHTML = `<i class="fas fa-times"></i>`// adding x to cell
        }
        else {
            clickedCell.classList.remove("grid-square");
            clickedCell.classList.add("grid-square2-clicked");

            clickedCell.innerHTML = `<i class="fas fa-circle"></i>`// adding circle to cell

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
        boardSquare.setAttribute("id", "grid-square");// index will repesent the specific grid square 0-8
        boardGrid.appendChild(boardSquare);

    });
    
    //adding Event Listeners to each square
    let arrBoardGrid = Array.from(document.querySelectorAll('#grid-square'));
    arrBoardGrid.forEach((element,index)=>{
        element.addEventListener("click", game.handleClick, {once:true});
    });
    
    return{
        arrBoardGrid
    };

})();


