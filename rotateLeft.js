changeLeft = (direction) => {
  
  if (direction === "N") {
    return "W";
  } else if (direction === "W") {
    return "S";
  } else if (direction === "S") {
    return "E";
  } else {
    return "N";
  }
};
