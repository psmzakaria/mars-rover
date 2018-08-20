moveGrid = () => {
  if (direction === "N") {
    return y_postion + 1;
  } else if (direction === "S") {
    return y_position - 1;
  } else if (direction === "W") {
    return x_position - 1;
  } else {
    x_position + 1;
  }
};
