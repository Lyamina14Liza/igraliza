const  game_board = document.querySelector('.board');
const start_board = document.querySelector('.board__button');
const input = document.querySelector('.board__input');
start_board.addEventListener('click', (event) => {
    event.preventDefault()
    let column = input.value;
    let number;
    if ( column >= 2 && column <= 6 && column % 2 == 0) {
         number = column *column;

    }
    else {
        number = 4;
    };

    createBoard();
});

function createBoard(columns) {
  gameBoard.textContent = "";

  const template = document.getElementById('gameTableTemplate');
  const clone = template.cloneNode;

  const tableElem = clone.querySelector('.table');

  tableElem. = 'grid';
}
// function createBoard() {  
//   const BoardSize = 8;  
//   board = document.querySelector('.board');  
//   board.innerHTML = '';  
//   for (let i = 0; i < BoardSize**2; i += 1) {  
//     const cell = document.createElement('div');  
//     let is_white = (parseInt(i / BoardSize) + (i % BoardSize)) % 2 == 0;  
//     cell.classList.add('cell', (is_white ? 'white' : 'black'));  
//     board.appendChild(cell);  
//   }  
// }  
