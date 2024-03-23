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
 


Goals for Netsalarycalculator:
    a. Create a function that takes in 2 arguments(salary and benefits)
        function netSalaryCalculator(basicSalary, benefits){}
    b. calculate the total gross pay
        const total = basicSalary+benefits;
    c. create a function to check your deduction for nssf according to your pay
        function nssf(total){
        const nssfTotal = total*0.06;
        return nssfTotal;
        }
    d. create a function to check for the amount deductable according to your pay in nhif
        function nhif(total){
            if (total >0 &&total<= 5999){
                const nhifdeduction = total - 150
                return nhifdeduction
            }
            else if(total >6000 &&total<= 7999){
                const nhifdeduction = total - 300
                return nhifdeduction 
            } 
            else if(total >8000 &&total<= 11999){
                const nhifdeduction = total - 400
                return nhifdeduction
            }
            else if(total >12000 &&total<= 14999){
                const nhifdeduction = total - 500
                return nhifdeduction
            }
            else if(total >15000 &&total<= 19999){
                const nhifdeduction = total - 600
                return nhifdeduction
            }
            else if(total >20000 &&total<= 24999){
                const nhifdeduction = total - 750
                return nhifdeduction
            }
            else if(total >25000 &&total<= 29999){
                const nhifdeduction = total - 850
                return nhifdeduction
            }
            else if(total >30000 &&total<= 34999){
                const nhifdeduction = total - 900
                return nhifdeduction
            }
            else if(total >35000 &&total<= 39999){
                const nhifdeduction = total - 950
                return nhifdeduction
            }
            else if(total >40000 &&total<= 44999){
                const nhifdeduction = total - 1000
                return nhifdeduction
            }
            else if(total >45000 &&total<= 50000){
                const nhifdeduction = total - 1100
                return nhifdeduction
            }
            else if(total >50000 &&total<= 59999){
                const nhifdeduction = total - 1200
                return nhifdeduction
            }
            else if(total >60000 &&total<= 69999){
                const nhifdeduction = total - 1300
                return nhifdeduction
            }
            else if(total >70000 &&total<= 79999){
                const nhifdeduction = total - 1400
                return nhifdeduction
            }
            else if(total >80000 &&total<= 89999){
                const nhifdeduction = total - 1500
                return nhifdeduction
            }
            else if(total >90000 &&total<= 99999){
                const nhifdeduction = total - 1600
                return nhifdeduction
            }
            else if(total >= 100000){
                const nhifdeduction = total - 1700
                return nhifdeduction
            }
            else{
                return "Invalid input";
            }

        }
    e. create a constant to store the removed non-taxable pay
        const deductions = nhif(total) + nssf(total)
    f. create a constant to allocate the taxable pay
        const taxablePay = total - deductions
    g. Create a function to validate and return the amount after being taxed
        function payee(taxablePay){
            if (taxablePay > 0 && taxablePay <= 24000){
                const taxedAmount = taxablePay*0.1
                return taxedAmount;
            }
            else if (taxablePay >= 24001 && taxablePay <= 32333 ){
                const taxedAmount = taxablePay*0.25
                return taxedAmount;
            }
            else if (taxablePay >= 32334 && taxablePay <= 500000 ){
                const taxedAmount = taxablePay*0.3
                return taxedAmount;
            }
            else if (taxablePay >= 500001 && taxablePay <= 800000 ){
                const taxedAmount = taxablePay*0.325
                return taxedAmount;
            }
            else if (taxablePay >800000){
                const taxedAmount = taxablePay*0.35
                return taxedAmount;
            }
            //checks for invalid inputs
            else{
                return "Invalid Input";
            }
        }
    h. Create a constant to store the total amount after all the taxations
        const netSalary = total - (payee(taxablePay)-deductions)
    i. return the results
        console.log(`Your gross salary is ${total}`)
        console.log(`Your Net salary is ${netSalary} `)
    j. call the netsalarycalculator function and passing in the arguments
        netSalaryCalculator(40000, 1000);