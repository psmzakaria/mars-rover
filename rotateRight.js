changeRight = direction => {
  if (direction === "N") {
    return "E";
  } else if (direction === "E") {
    return "S";
  } else if (direction === "S") {
    return "W";
  } else {
    return "N";
  }
};
