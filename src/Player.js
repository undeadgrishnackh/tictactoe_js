"use strict";

var BadPlayerError = require("../src/errors/BadPlayer");

class Player {

  constructor (mark) {
    if ( mark == "X" || mark == "O" ) {
      this.mark = mark;
    } else {
      throw new BadPlayerError("You tried to create a player NOT admitted in the game!", mark);
    }
  }

  getMark() {
    return this.mark;
  }
}

module.exports = {
  Player
};