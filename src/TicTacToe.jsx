import "./styles.css";
import React, { useState, useEffect } from "react";
import { board, players, possibleScenerios } from "./constants.js";

export default function TicTacToe() {
  const [currentBoard, setCurrentBoard] = useState(board);
  const [playerWon, setPlayerWon] = useState(null);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(
    players[currentPlayerIndex]
  );
  const judgeWinner = () => {
    let tempPlayer = players[currentPlayerIndex === 0 ? 1 : 0];
    const checkGame = possibleScenerios;

    checkGame.forEach((prob, i) => {
      let boardResult = [false, false, false];
      let boardResultIndex = 0;
      prob.forEach((cell, j) => {
        let indexes = cell.split(":").map((num) => parseInt(num));
        const temp = currentBoard[indexes[0]][indexes[1]];
        if (temp.value !== undefined && temp.value !== null) {
          boardResult[boardResultIndex] =
            temp.value && temp.value === tempPlayer.sign ? true : false;
        }
        boardResultIndex++;
      });
      /*Find Winner*/
      let finalResult = boardResult.every((value) => value === true);
      if (finalResult) {
        setPlayerWon(tempPlayer);
      }
    });
  };
  useEffect(() => {
    judgeWinner();
  }, [currentBoard]);

  const onTurn = (row, cell, checked) => {
    setCurrentBoard((prevBoard) => {
      const newBoard = JSON.parse(JSON.stringify(prevBoard));
      newBoard[row][cell]["value"] = checked ? currentPlayer.sign : null;
      newBoard[row][cell]["user"] = checked ? currentPlayer.player : null;
      return newBoard;
    });
    const nextPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    setCurrentPlayerIndex(nextPlayerIndex);
    setCurrentPlayer(players[nextPlayerIndex]);
  };

  const reset = () => {
    console.log("reset", board);
    setCurrentBoard(board);
    setPlayerWon(null);
    setCurrentPlayerIndex(0);
    setCurrentPlayer(players[currentPlayerIndex]);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="info">
          {!playerWon && <h1>Player {currentPlayer.sign} turn </h1>}
          {playerWon && (
            <h1 style={{ color: "#5e8b56" }}>Player {playerWon.sign} won</h1>
          )}
        </div>
        <div
          className="board"
          style={{ backgroundColor: playerWon ? "#d6dade" : "transparent" }}
        >
          <ul>
            {currentBoard.map((row, rowIndex) => (
              <li key={rowIndex}>
                <ul>
                  {row.map((cell) => (
                    <label class="checkbox-container">
                      <li key={cell.index}>
                        <input
                          disabled={playerWon !== null ? true : false}
                          type={"checkbox"}
                          value={cell.value}
                          checked={cell.value ? true : false}
                          onChange={(event) =>
                            onTurn(rowIndex, cell.index, event.target.checked)
                          }
                        />
                        <span class="checkmark">{cell.value}</span>
                      </li>
                    </label>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="resetContainer">
          <button onClick={(event) => reset()}>Reset Game</button>
        </div>
      </div>
    </div>
  );
}
