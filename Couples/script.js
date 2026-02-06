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

function createBoard(columns, count) {
  gameBoard.textContent = "";
  const template = document.querySelector('#gameTableTemplate').cloneNode(true).content;
  const gameTable = template.querySelector('.table');
  const restartBtn =template.querySelector('.table__button');

  for (let i = 0; i < count; i++) {
    gameTable.append(createCard());
}

  gameTable.style = `
    grid-template-columns: repeat(${columns}, 1fr);
    grid-template-rows: repeat(${columns}, 1fr);
  `;
  gameBoard.append(gameTable);

  restartBtn.addEventListener('click', () => {
    location.reload();
  });
  gameBoard.append(restartBtn);
}

function createCard(flippedIcon){
  const cardTemplate =document.querySelector('#cardTemplate').cloneNode(true).content;
  const card = cardTemplate.querySelector('.card');
}
