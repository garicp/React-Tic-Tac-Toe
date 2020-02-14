import React, { useState, useEffect } from "react";

import Header from "./Header";
import Credit from "./Credit";
import Box from "./Box";
import { createBoxObject, checkResultMethod } from "../functions/function";
import "./App.css";

import { ReactComponent as XIcon } from "../assets/devil.svg";
import { ReactComponent as OIcon } from "../assets/dionysus.svg";

const App = () => {
  const boxObject = createBoxObject(9);
  const [boxes, setBoxes] = useState(boxObject);
  const [selected, setSelected] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [player1choice, setPlayer1choice] = useState(Array(9).fill(""));
  const [player2choice, setPlayer2choice] = useState(Array(9).fill(""));
  const [room, setRoom] = useState(Array(9).fill(true));
  // const [yet, setYet] = useState(false);
  const [winningArray, setWinningArray] = useState("");
  const [message, setMessage] = useState("God or Devil?");
  // const darker = yet ? "darker" : "lighter";

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
      setWinningArray(player1WinningArray);
      const [p1a, p1b, p1c] = player1WinningArray;

      boxes.forEach(box => {
        box.disabled = "disabled";
        box.backgroundColor = "white";
        box.text = "";
        if (box.id === p1a || box.id === p1b || box.id === p1c) {
          box.text = <OIcon className="icon-animation" />;
        }
      });
      setMessage("Still believe in God!");
    } else if (player2Win) {
      setWinningArray(player2WinningArray);
      const [p2a, p2b, p2c] = player2WinningArray;

      boxes.forEach(box => {
        box.disabled = "disabled";
        box.backgroundColor = "white";
        box.text = "";
        if (box.id === p2a || box.id === p2b || box.id === p2c) {
          box.text = <XIcon className="icon-animation" />;
        }
      });
      setMessage("Devil conquered!");
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
      // setYet(true);
      boxes.forEach(box => {
        if (box.currentPlayer === "player1") {
          box.text = <OIcon className="darker" />;
        } else {
          box.text = <XIcon className="darker" />;
        }
      });

      setMessage("peace!!!");
    }
  }, [boxes, selected, player1choice, player2choice, room]);

  const handleClick = item => {
    setSelected(item);

    if (!currentPlayer || currentPlayer === "player2") {
      item.active = false;
      item.backgroundColor = "white";
      item.text = <OIcon className="icon" />;
      item.currentPlayer = "player1";
      item.disabled = "disabled";
      player1choice[item.id] = "selected";
      room[item.id] = false;

      setCurrentPlayer(item.currentPlayer);
      setMessage("Devil next!");
    } else {
      item.active = false;
      item.backgroundColor = "white";
      item.text = <XIcon className="icon" />;
      item.currentPlayer = "player2";
      item.disabled = "disabled";
      player2choice[item.id] = "selected";
      room[item.id] = false;
      setCurrentPlayer(item.currentPlayer);
      setMessage("God next!");
    }
  };

  const handleReset = () => {
    const newBoxObject = createBoxObject(9);

    setBoxes(newBoxObject);
    setSelected("");
    setCurrentPlayer("");
    setPlayer1choice(Array(9).fill(""));
    setPlayer2choice(Array(9).fill(""));
    setRoom(Array(9).fill(true));
    setMessage("God or Devil?");
  };

  return (
    <div>
      <Header topicTitle="Tic-Tac-Toe" />
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
        <button className="button-reset" onClick={handleReset}>
          Reset
        </button>
      </div>
      <Credit />
    </div>
  );
};

export default App;
