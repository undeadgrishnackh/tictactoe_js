"use strict";

module.exports = function VerticalVictory(whom) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = "Game is done with a VERTICAL VICTORY.";
  this.whom = whom;
};

require("util").inherits(module.exports, Error);