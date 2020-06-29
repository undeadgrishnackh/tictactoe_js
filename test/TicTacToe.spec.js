/* eslint-disable no-undef */
"use strict";

import { TicTacToe } from "../src/TicTacToe";
import { assert } from "chai";
import "chai/register-should";

var tictactoe = new TicTacToe();

describe("TicTacToe Game - Creation phase", () => {
  it("The game should have an empty board", () => {
    assert.isDefined(tictactoe.board, "Board isn't initialized!");
    tictactoe.board.isBoardEmpty().should.equal(true);
  });

  it("The game should have a player X", () => {
    assert.isDefined(tictactoe.playerX, "Player X isn't initialized!");
    tictactoe.playerX.getMark().should.equal("X");
  });

  it("The game should have a player O", () => {
    assert.isDefined(tictactoe.playerO, "Player O isn't initialized!");
    tictactoe.playerO.getMark().should.equal("O");
  });
});

describe("TicTacToe Game - Game simulations with victories & draw", () => {
  it("Player X WON Horizontal", () => {
    assert.fail("TEST NOT YET IMPLEMENTED!");
  });

  it("Player X WON Vertical", () => {
    assert.fail("TEST NOT YET IMPLEMENTED!");
  });

  it("Player O WON Horizontal", () => {
    assert.fail("TEST NOT YET IMPLEMENTED!");
  });

  it("Player O WON Vertical", () => {
    assert.fail("TEST NOT YET IMPLEMENTED!");
  });

  it("The game ended in a draw", () => {
    assert.fail("TEST NOT YET IMPLEMENTED!");
  });
});