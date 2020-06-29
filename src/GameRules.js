"use strict";

var GameRulesViolation = require("../src/errors/GameRulesViolation");
class GameRules {

  constructor() {
    this.round = 0;
    this.ticTacToe = undefined;
  }

  setGame (ticTacToe) {
    this.ticTacToe = ticTacToe;
  }

  getGame (){
    return this.ticTacToe;
  }

  actualPlayer(){
    return this.round % 2 === 0 ? "X" : "O";
  }

  moveToNextRound() {
    this.round ++;
  }

  drawTheMark(row, column, mark) {
    //GUARDIANS
    this.isTheMarkAllowed(mark);
    this.isYourRound(mark);
    this.isTheMarkInTheBoard(row, column);
    this.isTheCellEmpty(row, column, mark);

    //Drawing and move round forward
    this.ticTacToe.board.markTheCell(row, column, mark);
    this.isTheGameOver(mark);
    this.moveToNextRound();
    return true;
  }

  isTheMarkAllowed(mark) {
    if (mark != "X" && mark != "O") {
      throw new GameRulesViolation("You tried to draw a " + mark + " not allowed!", "Your mark must be X or O!");
    }
  }

  isYourRound(mark) {
    if (this.actualPlayer() != mark) {
      throw new GameRulesViolation("You tried to draw a " + mark + " on the other player round!", "You can't play in this round!");
    }
  }

  isTheCellEmpty(row, column, mark) {
    if (! this.ticTacToe.getBoard().isCellEmpty(row, column)) {
      throw new GameRulesViolation("You tried to draw a " + mark + " on a NOT EMPTY cell!", "The cell [" + row + "," + column + "] isn't empty!");
    }
  }

  isTheMarkInTheBoard(row, column, mark) {
    if (row > 2 || row < 0 || column > 2 || column < 0) {
      throw new GameRulesViolation("You tried to draw a " + mark + " out of the board!", "Coordinates: " + row + "," + column);
    }
  }

  isTheGameOver(mark){
    this.ticTacToe.board.isHorizontalVictory(mark);
    // this.ticTacToe.board.isVerticalVictory();
    // this.ticTacToe.board.isDiagonalVictory();
    // this.ticTacToe.board.isaDraw();
  }
}

module.exports = {
  GameRules
};