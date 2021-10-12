import Character from './domain';

class Game {
  start() {
    console.log('game started');
  }
}

export class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

//Экспорт из модуля game класса Game в качестве дефолтного, класса GameSavingData и функций readGameSaving и writeGameSaving

const Game = new Game();
export default Game;
