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

export { createBoxObject, checkResultMethod };
