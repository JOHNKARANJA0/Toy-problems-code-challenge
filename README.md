- created a file index.js

Goals for Student Grade Generator
 *Capture the user input
 *Check if it meets a certain category and pass back the necessary feedback
 *Check for an invalid feed back

    a. Initialize a function to capture the users input
        // initializing the function 
        function studentGradeGenerator(grade) {}
    b. Use an if statement to validate to users input
        if (grade>= 80 && grade <=100){
            //checks for the grade between 80 and 100
            return "A";
        }
        else if(grade>= 60 && grade <=79){
            //checks for the grade between 60 and 79
            return "B";
        }
        else if(grade>= 50 && grade <=59){
            //checks for the grade between 50 and 59
            return "C";
        }
        else if(grade>= 40 && grade <=49){
            //checks for the grade between 40 and 49
            return "D";
        } 
        else if(grade>= 39  && grade <=0){
            //checks for the grade between 39 and 0
            return "D";
        } 
        else{
            //checks for anything else ouside the range 0 and 100
            return "You have entered an invalid input"
        } 
    c. Calling the function and requesting the users input
        //prompts the user to input his grade
        studentGradeGenerator(100)


Goals for Speed Detector


    a. intitializing the function to capture the users input
    function speedDetector(speed){}
    b. create an if conditional statement to check the users input
        if (speed < 70 ){
        return "OK"
        }
        else if (speed >= 70){
            //capture the user input past 70 and subtract 70 from it
            const subPoints = speed - 70 
            //divide the subpoints by 5
            const point = subPoints/5
            //Capture the point and rounds off to the pevious whole number
            const points = Math.floor(point)
            //nested if statment to check the user input, validate it and return the points value
            if (points < 12){
                return `Points: ${points}`
            }
            //else statement for points 12 and above
            else{
                return "License suspended"
            }
        }
        //checks for invalid inputs
        else{
            return "Invalid Input"
        }
        c. call the function passing the user input
            speedDetector(); 
 


