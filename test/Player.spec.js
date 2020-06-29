/* eslint-disable no-undef */
"use strict";

import { assert } from "chai";
import { Player } from "../src/Player";

describe("Player creation tests ", () => {
  it("Player Mark should be X", () => {
    let player = new Player("X");
    assert.equal(player.getMark(), "X");
  });

  it("Player Mark should be O", () => {
    let player = new Player("O");
    assert.equal(player.getMark(), "O");
  });

  it("Player Mark Z is NOT accepted.", () => {
    try {
      new Player("Z");
      throw new BadPlayerError("You CREATED a player NOT admitted in the game!", "NO BadPlayerError ERROR THROWED!");
    } catch (err) {
      assert.strictEqual(err.extra, "Z");
    }
  });
});