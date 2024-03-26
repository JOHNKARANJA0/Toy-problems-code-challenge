// Function takes in 2 arguments
function netSalaryCalculator(basicSalary, benefits) {
  //calculate the total gross pay
  const total = basicSalary + benefits;
  //function to check your deduction for nssf according to your pay
  function nssf(total) {
    const nssfTotal = total * 0.06;
    //return the nssf total
    return nssfTotal;
  }
  //function to check for the amount deductable according to your pay in nhif
  function nhif(total) {
    if (total > 0 && total <= 5999) {
      return 150;
      //return the nhif deduction
    } else if (total > 6000 && total <= 7999) {
      return 300;
      //return the nhif deduction
    } else if (total > 8000 && total <= 11999) {
      return 400;
      //return the nhif deduction
    } else if (total > 12000 && total <= 14999) {
      return 500;
      //return the nhif deduction
    } else if (total > 15000 && total <= 19999) {
      return 600;
      //return the nhif deduction
    } else if (total > 20000 && total <= 24999) {
      return 750;
      //return the nhif deduction
    } else if (total > 25000 && total <= 29999) {
      return 850;
      //return the nhif deduction
    } else if (total > 30000 && total <= 34999) {
      return 900;
      //return the nhif deduction
    } else if (total > 35000 && total <= 39999) {
      return 950;
      //return the nhif deduction
    } else if (total > 40000 && total <= 44999) {
      return 1000;
      //return the nhif deduction
    } else if (total > 45000 && total <= 50000) {
      return 1100;
      //return the nhif deduction
    } else if (total > 50000 && total <= 59999) {
      return 1200;
      //return the nhif deduction
    } else if (total > 60000 && total <= 69999) {
      return 1300;
      //return the nhif deduction
    } else if (total > 70000 && total <= 79999) {
      return 1400;
      //return the nhif deduction
    } else if (total > 80000 && total <= 89999) {
      return 1500;
      //return the nhif deduction
    } else if (total > 90000 && total <= 99999) {
      return 1600;
      //return the nhif deduction
    } else if (total >= 100000) {
      return 1700;
      //return the nhif deduction
    }
    //Checks for invalid inputs
    else {
      return "Invalid input";
      // returns if the value total is invalid
    }
  }
  // To remove the non-taxable pay
  const deductions = nhif(total) + nssf(total);
  //Allocating the taxable pay
  const taxablePay = total - deductions;
  //Function to validate and return the amount after being taxed
  function payee(taxablePay) {
    if (taxablePay > 0 && taxablePay <= 24000) {
        //calculate the payee
      const taxedAmount = taxablePay * 0.1;
      // return the result from payee
      return taxedAmount;
    } else if (taxablePay >= 24001 && taxablePay <= 32333) {
        //calculate the payee
      const taxedAmount = taxablePay * 0.25;
        // return the result from payee
      return taxedAmount;
    } else if (taxablePay >= 32334 && taxablePay <= 500000) {
         //calculate the payee
      const taxedAmount = taxablePay * 0.3;
      // return the result from payee
      return taxedAmount;
    } else if (taxablePay >= 500001 && taxablePay <= 800000) {
        //calculate the payee
      const taxedAmount = taxablePay * 0.325;
      // return the result from payee
      return taxedAmount;
    } else if (taxablePay > 800000) {
        //calculate the payee
      const taxedAmount = taxablePay * 0.35;
        // return the result from payee
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
netSalaryCalculator(20000, 1000);
