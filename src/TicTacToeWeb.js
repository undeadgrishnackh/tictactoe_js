"use strict";

import { createServer } from "http";
import { TicTacToe } from "./TicTacToe";

function process_request(req, res) {
  var tictactoe = new TicTacToe();
  var body = tictactoe.gameRules.drawTheMark(1, 1, "X");
  var content_length = body.length;
  res.writeHead(200, {
    "Content-Length" : content_length,
    "Content-Type" : "text/plain",
  });

  res.end(body);
}

var webPage = createServer(process_request);
webPage.listen(8080);
