/* 
<i class="fas fa-tint"></i> //water drop
<i class="fas fa-dragon"></i> //dragon
<i class="far fa-circle"></i>
<i class="fas fa-times"></i>
*/

const playerFactory = () => {
    let player1 = true;

    return{
        player1
    };
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
        boardSquare.classList.add('grid-square'); 
        boardSquare.setAttribute("id", `${index}`);// index will repesent the specific grid square 0-8
        boardGrid.appendChild(boardSquare);

    });
    //adding Event Listeners to each square
    let arrBoardGrid = Array.from(document.querySelectorAll('.grid-square'));
    arrBoardGrid.forEach((element,index)=>{
        element.addEventListener("click", (e)=>{ //on click do this anon function, only once per cell to avoid over writing
            const cell = e.target;
            cell.classList.add("no-click"); //no longer clickable
            if (playerFactory.player1) {
            //if player one's turn
                cell.innerHTML = `<i class="fas fa-times"></i>`
                // adding x to cell
            }
            else{
                cell.innerHTML = `<i class="fas fa-circle"></i>`
                // adding circle to cell


            }

        }, {once:true})
    });

    

    return{
        arrBoardGrid
    };

})();


