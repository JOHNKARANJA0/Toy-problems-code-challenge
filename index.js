// initiaized a function to check for the user input and give an output
function studentGradeGenerator(grade) {
  if (grade >= 80 && grade <= 100) {
    //checks for the grade between 80 and 100
    return "A";
  } else if (grade >= 60 && grade <= 79) {
    //checks for the grade between 60 and 79
    return "B";
  } else if (grade >= 50 && grade <= 59) {
    //checks for the grade between 50 and 59
    return "C";
  } else if (grade >= 40 && grade <= 49) {
    //checks for the grade between 40 and 49
    return "D";
  } else if (grade >= 39 && grade <= 0) {
    //checks for the grade between 39 and 0
    return "D";
  } else {
    //checks for anything else ouside the range 0 and 100
    return "You have entered an invalid input";
  }
}
//prompts the user to input his grade
studentGradeGenerator(100);

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
//calling the fuction and passing the user input
speedDetector(80);
// Function takes in 2 arguments
function netSalaryCalculator(basicSalary, benefits) {
  //calculate the total gross pay
  const total = basicSalary + benefits;
  //function to check your deduction for nssf according to your pay
  function nssf(total) {
    const nssfTotal = total * 0.06;
    return nssfTotal;
  }
  //function to check for the amount deductable according to your pay in nhif
  function nhif(total) {
    if (total > 0 && total <= 5999) {
      return 150;
    } else if (total > 6000 && total <= 7999) {
      return 300;
    } else if (total > 8000 && total <= 11999) {
      return 400;
    } else if (total > 12000 && total <= 14999) {
      return 500;
    } else if (total > 15000 && total <= 19999) {
      return 600;
    } else if (total > 20000 && total <= 24999) {
      return 750;
    } else if (total > 25000 && total <= 29999) {
      return 850;
    } else if (total > 30000 && total <= 34999) {
      return 900;
    } else if (total > 35000 && total <= 39999) {
      return 950;
    } else if (total > 40000 && total <= 44999) {
      return 1000;
    } else if (total > 45000 && total <= 50000) {
      return 1100;
    } else if (total > 50000 && total <= 59999) {
      return 1200;
    } else if (total > 60000 && total <= 69999) {
      return 1300;
    } else if (total > 70000 && total <= 79999) {
      return 1400;
    } else if (total > 80000 && total <= 89999) {
      return 1500;
    } else if (total > 90000 && total <= 99999) {
      return 1600;
    } else if (total >= 100000) {
      return 1700;
    }
    //Checks for invalid inputs
    else {
      return "Invalid input";
    }
  }
  // To remove the non-taxable pay
  const deductions = nhif(total) + nssf(total);
  //Allocating the taxable pay
  const taxablePay = total - deductions;
  //Function to validate and return the amount after being taxed
  function payee(taxablePay) {
    if (taxablePay > 0 && taxablePay <= 24000) {
      const taxedAmount = taxablePay * 0.1;
      return taxedAmount;
    } else if (taxablePay >= 24001 && taxablePay <= 32333) {
      const taxedAmount = taxablePay * 0.25;
      return taxedAmount;
    } else if (taxablePay >= 32334 && taxablePay <= 500000) {
      const taxedAmount = taxablePay * 0.3;
      return taxedAmount;
    } else if (taxablePay >= 500001 && taxablePay <= 800000) {
      const taxedAmount = taxablePay * 0.325;
      return taxedAmount;
    } else if (taxablePay > 800000) {
      const taxedAmount = taxablePay * 0.35;
      return taxedAmount;
    }
    //checks for invalid inputs
    else {
      return "Invalid Input";
    }
  }
  // storing the total amount after all the taxations
  const netSalary = total - (payee(taxablePay) + deductions);
  //printing out the results
  console.log(`Your gross salary is ${total}`);
  console.log(`Your Net salary is ${netSalary}`);
}
//calling the netsalarycalculator function and passing in the arguments
netSalaryCalculator(40000, 1000);
