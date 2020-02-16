import React from "react";

import { ReactComponent as XIcon } from "../assets/devil.svg";
import { ReactComponent as OIcon } from "../assets/dionysus.svg";

const createBoxObject = num => {
  let newObject = [];

  for (let i = 0; i < num; i++) {
    newObject[i] = {
      id: i,
      active: true,
      backgroundColor: "#ececec",
      text: "",
      currentPlayer: "",
      disabled: ""
    };
  }

  return newObject;
};

const player1Object = {
  id: "p1",
  icon: <OIcon className="icon" />,
  iconSmall: <OIcon className="icon-small" />,
  iconSmallDarker: <OIcon className="icon-small darker" />,
  iconAnimation: <OIcon className="icon icon-animation" />,
  iconDarker: <OIcon className="icon darker" />,
  iconBackgroundLeft: <OIcon className="icon-god-big-left" />,
  iconBackgroundRight: <XIcon className="icon-devil-big-right" />,
  message: "Next... Devil!",
  winningMessage: "Still believe in God!",
  winnerColor: "rgba(0,191,158,.4)",
  loserColor: "rgba(0, 0, 0, .3)"
};

const player2Object = {
  id: "p2",
  icon: <XIcon className="icon" />,
  iconSmall: <XIcon className="icon-small" />,
  iconSmallDarker: <XIcon className="icon-small darker" />,
  iconAnimation: <XIcon className="icon icon-animation" />,
  iconDarker: <XIcon className="icon darker" />,
  iconBackgroundLeft: <XIcon className="icon-devil-big-left" />,
  iconBackgroundRight: <OIcon className="icon-god-big-right" />,
  message: "Next... God!",
  winningMessage: "Devil conquered!",
  winnerColor: "rgba(255,161,172,.7)",
  loserColor: "rgba(0, 0, 0, .3)"
};

const checkResultMethod = choice => {
  if (
    choice[0] === "selected" &&
    choice[1] === "selected" &&
    choice[2] === "selected"
  ) {
    return { win: true, winningArray: [0, 1, 2] };
  } else if (
    choice[3] === "selected" &&
    choice[4] === "selected" &&
    choice[5] === "selected"
  ) {
    return { win: true, winningArray: [3, 4, 5] };
    // return true;
  } else if (
    choice[6] === "selected" &&
    choice[7] === "selected" &&
    choice[8] === "selected"
  ) {
    return { win: true, winningArray: [6, 7, 8] };
  } else if (
    choice[0] === "selected" &&
    choice[3] === "selected" &&
    choice[6] === "selected"
  ) {
    return { win: true, winningArray: [0, 3, 6] };
  } else if (
    choice[1] === "selected" &&
    choice[4] === "selected" &&
    choice[7] === "selected"
  ) {
    return { win: true, winningArray: [1, 4, 7] };
  } else if (
    choice[2] === "selected" &&
    choice[5] === "selected" &&
    choice[8] === "selected"
  ) {
    return { win: true, winningArray: [2, 5, 8] };
  } else if (
    choice[0] === "selected" &&
    choice[4] === "selected" &&
    choice[8] === "selected"
  ) {
    return { win: true, winningArray: [0, 4, 8] };
  } else if (
    choice[2] === "selected" &&
    choice[4] === "selected" &&
    choice[6] === "selected"
  ) {
    return { win: true, winningArray: [2, 4, 6] };
  } else {
    return false;
  }
};

export { createBoxObject, player1Object, player2Object, checkResultMethod };
