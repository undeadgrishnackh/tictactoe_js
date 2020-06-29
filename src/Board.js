"use strict";
import { matrix } from "mathjs";
var HorizontalVictory = require("../src/states/HorizontalVictory");
// var VerticalVictory = require("../src/states/VerticalVictory");
// var DiagonalVictory = require("../src/states/DiagonalVictory");
// var Draw = require("../src/states/Draw");


class Board {

  constructor () {
    this.board = matrix([[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]]);
  }

  toString() {
    return this.board.toString();
  }

  size(){
    return this.board.size().toString();
  }

  toASCII() {
    return this.board.get([0, 0]) + "|" + this.board.get([0, 1]) + "|" + this.board.get([0, 2]) + "\n" +
    "-+-+-\n" +
    this.board.get([1, 0]) + "|" + this.board.get([1, 1]) + "|" + this.board.get([1, 2]) + "\n" +
    "-+-+-\n" + 
    this.board.get([2, 0]) + "|" + this.board.get([2, 1]) + "|" + this.board.get([2, 2]);
  }

  isBoardEmpty() {
    return this.board.toString().split("\" \"").length == 10 ? true : false;
  }

  isCellEmpty(row, column) {
    return this.board.get([row, column]) == " " ? true : false;
  }

  markTheCell(row, column, mark) {
    this.board.set([row, column], mark);
  }

  get(row, column) {
    return this.board.get([row, column]);
  }

  isHorizontalVictory(mark) {
    for (let row = 0; row < 3; row++) {
      if (this.board.get([row, 0]) == this.board.get([row, 1]) && this.board.get([row, 0]) == this.board.get([row, 2]) && this.board.get([row, 0]) != " ") {
        throw new HorizontalVictory("Game is done with a HORIZONTAL VICTORY.", mark);
      }
    }
  }
}

module.exports = {
  Board
};