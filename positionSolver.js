initialPostion = string => {
  arrInitialPostion = [];

  arrInitialPostion = string.split(" ");

  return arrInitialPostion;
};

getInitial_X_Position = string => {
  arrInitialPostion = [];

  arrInitialPostion = string.split(" ");
  return arrInitialPostion[0]
};

getInitial_Y_Position = string => {
    arrInitialPostion = [];
  
    arrInitialPostion = string.split(" ");
    return arrInitialPostion[1]
  };
  getInitialDirection = string => {
    arrInitialPostion = [];
  
    arrInitialPostion = string.split(" ");
    return arrInitialPostion[2]
  };


console.log(initialPostion("1 2 N"));
console.log(getInitial_X_Position("1 2 N"));
console.log(getInitial_Y_Position("1 2 N"));
console.log(getInitialDirection("1 2 N"));


