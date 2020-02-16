import React, { useState, useEffect } from "react";

import Header from "./Header";
import Credit from "./Credit";
import Box from "./Box";
import {
  createBoxObject,
  player1Object,
  player2Object,
  checkResultMethod
} from "../functions/function";
import "./App.css";

const App = () => {
  const boxObject = createBoxObject(9);
  const [boxes, setBoxes] = useState(boxObject);
  const [selected, setSelected] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [startPlayer, setStartPlayer] = useState("Player1");
  const [gameDraw, setGameDraw] = useState(false);
  const [player1choice, setPlayer1choice] = useState(Array(9).fill(""));
  const [player2choice, setPlayer2choice] = useState(Array(9).fill(""));
  const [room, setRoom] = useState(Array(9).fill(true));
  // const [winningArray, setWinningArray] = useState("");
  const [message, setMessage] = useState("God or Devil?");
  const [player1, setPlayer1] = useState(player1Object);
  const [player2, setPlayer2] = useState(player2Object);

  useEffect(() => {
    // console.log("boxes", boxes);
    // console.log("yet", yet);
    // console.log("selected", selected);
    // console.log("player1 choice", player1choice);
    // console.log("player2 choice", player2choice);
    // console.log("choice1", checkResultMethod(player1choice));
    // console.log("choice2", checkResultMethod(player2choice));

    const {
      win: player1Win,
      winningArray: player1WinningArray
    } = checkResultMethod(player1choice);

    const {
      win: player2Win,
      winningArray: player2WinningArray
    } = checkResultMethod(player2choice);

    if (player1Win) {
      // setWinningArray(player1WinningArray);
      const [p1a, p1b, p1c] = player1WinningArray;

      boxes.forEach(box => {
        box.disabled = "disabled";
        box.backgroundColor = "transparent";
        box.text = "";
        if (box.id === p1a || box.id === p1b || box.id === p1c) {
          box.text = player1.iconAnimation;
        }
      });
      setMessage(player1.winningMessage);
      setCurrentPlayer("player2"); //** important to show winner at the bottom part
    } else if (player2Win) {
      // setWinningArray(player2WinningArray);
      const [p2a, p2b, p2c] = player2WinningArray;

      boxes.forEach(box => {
        box.disabled = "disabled";
        box.backgroundColor = "transparent";
        box.text = "";
        if (box.id === p2a || box.id === p2b || box.id === p2c) {
          box.text = player2.iconAnimation;
        }
      });
      setMessage(player2.winningMessage);
      setCurrentPlayer("player1"); //** important to show winner at the bottom part
    } else if (
      !room[0] &&
      !room[1] &&
      !room[2] &&
      !room[3] &&
      !room[4] &&
      !room[5] &&
      !room[6] &&
      !room[7] &&
      !room[8]
    ) {
      boxes.forEach(box => {
        if (box.currentPlayer === "player1") {
          box.text = player1.iconDarker;
        } else {
          box.text = player2.iconDarker;
        }
      });

      setMessage("peace!!!");
      setGameDraw(true);
    }
  }, [
    boxes,
    selected,
    player1choice,
    player2choice,
    room,
    player1,
    player2,
    gameDraw
  ]);

  const handleClick = item => {
    setSelected(item);

    if (!currentPlayer || currentPlayer === "player2") {
      item.active = false;
      item.backgroundColor = "transparent";
      item.text = player1.icon;
      item.currentPlayer = "player1";
      item.disabled = "disabled";
      player1choice[item.id] = "selected";
      room[item.id] = false;

      setCurrentPlayer(item.currentPlayer);
      setMessage(player1.message);
    } else {
      item.active = false;
      item.backgroundColor = "transparent";
      item.text = player2.icon;
      item.currentPlayer = "player2";
      item.disabled = "disabled";
      player2choice[item.id] = "selected";
      room[item.id] = false;
      setCurrentPlayer(item.currentPlayer);
      setMessage(player2.message);
    }
  };

  const handleGodToDevil = () => {
    if (
      message === "God or Devil?" &&
      player1.id === player1Object.id &&
      player2.id === player2Object.id &&
      message !== player1.measage &&
      message !== player2.message &&
      message !== player1.winningMessage &&
      message !== player2.winningMessage &&
      message !== "peace!!!"
    ) {
      setPlayer1(player2Object);
      setPlayer2(player1Object);
    } else if (
      message !== "God or Devil?" &&
      player1.id !== player1Object.id &&
      player2.id !== player2Object.id &&
      message === player1.measage &&
      message === player2.message &&
      message === player1.winningMessage &&
      message === player2.winningMessage &&
      message === "peace!!!"
    ) {
      setPlayer1(player1Object);
      setPlayer2(player2Object);
      console.log("2nd change");
    }
  };

  const handleReset = () => {
    if (
      message === player1.winningMessage ||
      message === player2.winningMessage ||
      message === "peace!!!"
    ) {
      const newBoxObject = createBoxObject(9);

      setBoxes(newBoxObject);
      setSelected("");
      setCurrentPlayer("");
      setPlayer1choice(Array(9).fill(""));
      setPlayer2choice(Array(9).fill(""));
      setRoom(Array(9).fill(true));
      setMessage("God or Devil?");
      setGameDraw(false);
    }
  };

  return (
    <div>
      <Header topicTitle="Tic-Tac-Toe" />
      <div className="background-container">
        {player1.iconBackgroundLeft}
        {player1.iconBackgroundRight}
      </div>
      <div className="game-container">
        <div className="message">{message}</div>
        <div className="box-container">
          {boxes &&
            boxes.map(box => (
              <Box
                key={box.id}
                className="button-box"
                style={{ backgroundColor: box.backgroundColor }}
                onClick={() => handleClick(box)}
                disabled={box.disabled}
                text={box.text}
              />
            ))}
        </div>
        <div className="bottom-container">
          <button
            className="player-god-devil"
            onClick={handleGodToDevil}
            style={{
              backgroundColor:
                gameDraw === true ||
                (message !== "God or Devil?" &&
                  message === player2.winningMessage &&
                  message !== player1.measage &&
                  message !== player2.message)
                  ? "rgba(0, 0, 0, .3)"
                  : "",
              background:
                message === player1.winningMessage && player1.winnerColor
            }}
          >
            {startPlayer === "player1" ||
            currentPlayer === "player1" ||
            gameDraw
              ? player1.iconSmallDarker
              : player1.iconSmall}
          </button>
          <button className="button-reset" onClick={handleReset}>
            Reset
          </button>
          <button
            className="player-god-devil"
            onClick={handleGodToDevil}
            style={{
              backgroundColor:
                gameDraw === true ||
                (message !== "God or Devil?" &&
                  message === player1.winningMessage &&
                  message !== player1.measage &&
                  message !== player2.message)
                  ? "rgba(0, 0, 0, .3)"
                  : "",
              background:
                message === player2.winningMessage && player2.winnerColor
            }}
          >
            {!currentPlayer || currentPlayer === "player2" || gameDraw
              ? player2.iconSmallDarker
              : player2.iconSmall}
          </button>
        </div>
      </div>
      <Credit />
    </div>
  );
};

export default App;
