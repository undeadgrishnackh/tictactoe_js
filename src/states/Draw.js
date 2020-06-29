"use strict";

module.exports = function Draw() {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = "Game is done with a DRAW.";
};

require("util").inherits(module.exports, Error);