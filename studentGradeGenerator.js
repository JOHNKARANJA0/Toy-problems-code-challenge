// initiaized a function to check for the user input and give an output
function studentGradeGenerator(grade) {
    const words = "Your grade is: "
    if (grade >= 80 && grade <= 100) {
      //checks for the grade between 80 and 100
      return `${words} A`;
    } else if (grade >= 60 && grade <= 79) {
      //checks for the grade between 60 and 79
      return `${words} B`;
    } else if (grade >= 50 && grade <= 59) {
      //checks for the grade between 50 and 59
      return `${words} C`;
    } else if (grade >= 40 && grade <= 49) {
      //checks for the grade between 40 and 49
      return `${words} D`;
    } else if (grade >= 39 && grade <= 0) {
      //checks for the grade between 39 and 0
      return `${words} E`;
    } else {
      //checks for anything else ouside the range 0 and 100
      return "You have entered an invalid input";
    }
  }
//prompts the user to input his grade
const grade = prompt("What is your grade: ")
//Invokes the function
console.log(studentGradeGenerator(grade));