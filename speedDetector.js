//intitializing a function to capture the speed of a car
function speedDetector(speed) {
  //creating an if statement to check the user input
  if (speed < 70) {
    return "OK";
  } else if (speed >= 70) {
    //capture the user input past 70 and subtract 70 from it
    const subPoints = speed - 70;
    //divide the subpoints by 5
    const point = subPoints / 5;
    //Capture the point and rounds off to the pevious whole number
    const points = Math.floor(point);
    //nested if statment to check the user input, validate it and return the points value
    if (points < 12) {
      return `Points: ${points}`;
    }
    //else statement for points 12 and above
    else {
      return "License suspended";
    }
  }
  //checks for invalid inputs
  else {
    return "Invalid Input";
  }
}
//requsting the user for the input
const speed = prompt("Please input the speed: ")
//calling the fuction and passing the user input
speedDetector(speed);
