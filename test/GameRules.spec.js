/* eslint-disable no-undef */
"use strict";

import { GameRules } from "../src/GameRules";
import { TicTacToe } from "../src/TicTacToe";
import { assert } from "chai";
import "chai/register-should";
// var GameRulesViolation = require("../src/errors/GameRulesViolation");

describe("Game rules - Rounds", () => {
  it("First round should be zero", () => {
    let gameRules = new GameRules();
    gameRules.round.should.equal(0);
  });

  it("First player should be X", () => {
    let gameRules = new GameRules();
    gameRules.actualPlayer().should.equal("X");
  });

  it("Next player should be O", () => {
    let gameRules = new GameRules();
    gameRules.moveToNextRound();
    gameRules.actualPlayer().should.equal("O");
  });
});

describe("Game rules - Players draw some marks", () => {
  it("The mark should be in the board", () => {
    try {
      let gameRules = new GameRules();
      gameRules.drawTheMark(1,5,"X");
      assert.fail("YOU DREW the mark on coordinate not allowed: 1,5!");
    } catch (err) {
      assert.strictEqual(err.extra, "Coordinates: 1,5");
    }
  });

  it("The mark should be on an empty space", () => {
    try {
      let tictactoe = new TicTacToe();
      tictactoe.gameRules.drawTheMark(1, 1, "X");
      assert.strictEqual(tictactoe.getBoard().get(1,1), "X", "Cell [1,1] doesn't contain the mark X!");
    } catch (err) {
      assert.fail("Draw a mark on a empty board, empty cell, raised an unexpected error: " + err.message + " Extra: " + err.extra);
    }
  });

  it("The player can't draw multiple marks in a round", () => {
    try {
      let tictactoe = new TicTacToe();
      tictactoe.gameRules.drawTheMark(1, 1, "X");
      tictactoe.gameRules.drawTheMark(1, 1, "X");
      assert.fail("YOU DREW the mark in the wrong round!");
    } catch (err) {
      assert.strictEqual(err.extra, "You can't play in this round!");
    }
  });

  it("The mark can't overwrite another mark", () => {
    try {
      let tictactoe = new TicTacToe();
      tictactoe.gameRules.drawTheMark(1, 1, "X");
      tictactoe.gameRules.drawTheMark(1, 1, "O");
      assert.fail("YOU DREW the mark on a NOT EMPTY cell!");
    } catch (err) {
      assert.strictEqual(err.extra, "The cell [1,1] isn't empty!");
    }
  });

  it("The player must draw the mark", () => {
    try {
      let tictactoe = new TicTacToe();
      tictactoe.gameRules.drawTheMark(1, 1, "");
      assert.fail("YOU DREW an empty mark!");
    } catch (err) {
      assert.strictEqual(err.extra, "Your mark must be X or O!");
    }
  });

  it("The mark should be on TOP-LEFT", () => {
    drawTheMarkAndCheckTheRender(0, 0, "X| | \n-+-+-\n | | \n-+-+-\n | | ");
  });

  it("The mark should be on TOP-RIGHT", () => {
    drawTheMarkAndCheckTheRender(0, 2, " | |X\n-+-+-\n | | \n-+-+-\n | | ");
  });

  it("The mark should be on BOTTOM-RIGHT", () => {
    drawTheMarkAndCheckTheRender(2, 2, " | | \n-+-+-\n | | \n-+-+-\n | |X");
  });

  it("The mark should be on BOTTOM-LEFT", () => {
    drawTheMarkAndCheckTheRender(2, 0, " | | \n-+-+-\n | | \n-+-+-\nX| | ");
  });

  it("The mark should be on TOP", () => {
    drawTheMarkAndCheckTheRender(0, 1, " |X| \n-+-+-\n | | \n-+-+-\n | | ");
  });

  it("The mark should be on CENTER", () => {
    drawTheMarkAndCheckTheRender(1, 1, " | | \n-+-+-\n |X| \n-+-+-\n | | ");
  });

  it("The mark should be on RIGHT", () => {
    drawTheMarkAndCheckTheRender(1, 2, " | | \n-+-+-\n | |X\n-+-+-\n | | ");
  });

  it("The mark should be on LEFT", () => {
    drawTheMarkAndCheckTheRender(1, 0, " | | \n-+-+-\nX| | \n-+-+-\n | | ");
  });

  it("The mark should be on BOTTOM", () => {
    drawTheMarkAndCheckTheRender(2, 1, " | | \n-+-+-\n | | \n-+-+-\n |X| ");
  });
});

describe("Game rules - when the game is done", () => {
  it("Horizontal victory", () => {
    try {
      let tictactoe = new TicTacToe();
      tictactoe.gameRules.drawTheMark(0, 0, "X");
      tictactoe.gameRules.drawTheMark(1, 0, "O");
      tictactoe.gameRules.drawTheMark(0, 1, "X");
      tictactoe.gameRules.drawTheMark(1, 1, "O");
      tictactoe.gameRules.drawTheMark(0, 2, "X");
      assert.fail("The game isn't done with a HORIZONTAL VICTORY");
    } catch (err) {
      assert.strictEqual(err.message, "Game is done with a HORIZONTAL VICTORY.");
    }
  });

  it("Vertical victory", () => {
    assert.fail("TEST NOT YET IMPLEMENTED!");
  });

  it("Diagonal victory", () => {
    assert.fail("TEST NOT YET IMPLEMENTED!");
  });

  it("Should be a draw after 9 moves", () => {
    assert.fail("TEST NOT YET IMPLEMENTED!");
  });
});

function drawTheMarkAndCheckTheRender(row, column, asciiRender) {
  try {
    let tictactoe = new TicTacToe();
    tictactoe.gameRules.drawTheMark(row, column, "X");
    assert.strictEqual(tictactoe.getBoard().get(row, column), "X", "Cell [" + row + "," + column + "] doesn't contain the mark X!");
    assert.strictEqual(tictactoe.getBoard().toASCII(), asciiRender, "ASCII RENDER ERROR!");
  }
  catch (err) {
    assert.fail("Draw a mark on " + row + "," + column + " raised an unexpected error: " + err.message + " Extra: " + err.extra);
  }
}
