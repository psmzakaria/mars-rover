class Rover {
  constructor(x_position, y_position, direction, commandString) {
    this.x_position = x_position;
    this.y_position = y_position;
    this.direction = direction;
    this.commandString = commandString;
  }

  commandDecipher(commandString) {
    commandArr = [];
    commandArr = commandString.split("");
    return commandArr;
  }

  moveGrid() {
    if (direction === "N") {
      return this.y_postion + 1;
    } else if (direction === "S") {
      return this.y_position - 1;
    } else if (direction === "W") {
      return this.x_position - 1;
    } else {
      this.x_position + 1;
    }
  }

  rotateLeft() {
    if (direction === "N") {
      return (this.direction = "W");
    } else if (direction === "W") {
      return (this.direction = "S");
    } else if (direction === "S") {
      return (this.direction = "E");
    } else {
      return (this.direction = "N");
    }
  }
  rotateRight(direction) {
    if (direction === "N") {
      return (this.direction = "E");
    } else if (direction === "E") {
      return (this.direction = "S");
    } else if (direction === "S") {
      return (this.direction = "W");
    } else {
      return (this.direction = "N");
    }
  }

  get x_position() {
    return this.x_position;
  }
  get y_position() {
    return this.y_position;
  }

  commandArr = commandDecipher(commandString);

  moveRover() {
    commandArr.forEach(element => {
      if (element === "L") {
        rotateLeft();
      } else if (element === "R") {
        rotateRight();
      } else {
        moveGrid();
      }
    });
  }
}
