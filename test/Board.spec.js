/* eslint-disable no-undef */
"use strict";

import { Board } from "../src/Board";
import { assert } from "chai";
// import { get } from "https";

describe("Board Tests for the creation phase", () => {
  it("Board should be 3 x 3", () => {
    let board = new Board();
    assert.equal(board.size(), "3,3", "The game board isn't 3 x 3 like expected!");
  });

  it("Board should be empty", () => {
    let emptyBoardToString = "[[\" \", \" \", \" \"], [\" \", \" \", \" \"], [\" \", \" \", \" \"]]";
    let board = new Board();
    assert.equal(board.toString(), emptyBoardToString, "The game board isn't EMPTY!");
  });

  it("Board should be rendered as ASCII", () => {
    const expectedASCII = " | | \n-+-+-\n | | \n-+-+-\n | | ";
    let board = new Board();
    assert.equal(board.toASCII(), expectedASCII, "The Game board rendering in ASCI isn't as expected!");
  });
});