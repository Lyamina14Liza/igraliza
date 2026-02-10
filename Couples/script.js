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
  card.querySelector('#flippedIcon').classList.add(`fa-${flippedIcon}`);

  // card.addEventListener('click', (event) => gameLogic(event, card));

  // rutern card означает, что получившийся объект "выбрасывается" в то место, где будет вызвана функция createCard
  return card;
}

function createIconsArray(initialCount){
  const cardsIcons = [
    "compass",
     "cloud",
     "play", 
     "bolt", 
     "stop", 
     "cogs", 
     "atom", 
     "basketball-ball", 
     "arrows", 
     "angle-left", 
     "bars", "file", 
     "filter", "gear", 
     "folder", 
     "folder-open", 
     "shield", 
     "scissors", 
     "pen-clip"];
};
// slice - метод, который возвращает только некоторые элементы массива,
//  начиная 0-м и заканчивая, например, 2-м, 8-м или 18-м
//сделаем так, что если игрок выберет поле 4х4 (16 ячеек), то выберется 8 иконок
let cards = cardsIcons.slice(0, Math.floor(initialCount / 2));
// ...