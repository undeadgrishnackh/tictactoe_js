"use strict";

import { Board } from "./Board";
import { Player } from "./Player";
import { GameRules } from "./GameRules";

class TicTacToe {

  constructor () {
    // console.log("Welcome to the TicTacToe game!");
    this.board = new Board();
    // console.log("Board created... \n" + this.board.toASCII());
    this.playerO = new Player("O");
    // console.log("Player O created.");
    this.playerX = new Player("X");
    // console.log("Player X created.");
    this.gameRules = new GameRules();
    this.gameRules.setGame(this);
    // console.log("Game rules created.");
    // console.log("The game is ready to start!");
  }

  getBoard() {
    return this.board;
  }
}

module.exports = {
  TicTacToe
};