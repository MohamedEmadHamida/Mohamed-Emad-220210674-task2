/*
   js code to  submit the value that only changed in the form data from php and with get method 

 1- validate the data in the range [100,0]  (X)
 2- store value in arr to compare it if the value changes or not 
 3- AddBounds() Function to add 5 grade for all studeint 
 4- submitForm() Function to compare the value with the orgianal values after validation                                        next (save array at frist with out validation then make the submit with the validtaion )
 5- global variable max Grade , min Grade , bouns 
 6- dynamic update for the values with addEventListener for all input fields
 7- allgradeup() to update the grades and gpa                                                                          update it to change only value that have changed with addEventListener


 8/3/2024
 Mohamed Emad El-Din 
*/



/*
Update 20/3

1- arr3,arr4 to store exam value and cheack if changed or not 
2- bouns only for practis grade 
3- validation on both grade
4- ui update 
*/





//array to store data to compare if it changed or not 
//global variable
let arr = [];
let arr2 = [];

let arr3 = [];
let arr4 = []

let maxgrade1 = 40;
let maxgrade2 = 60;
let mingrade = 0;
let bouns = 5; //bouns value 
let fristtime = 1



// Access counter value = number of records count form php data counter 
const countValue = document.getElementById("count").value;

//event listener for all input elemnts 
var inputElements = document.querySelectorAll('input[type="number"]');

inputElements.forEach(function(inputElement) {
    inputElement.addEventListener('input', function() {
        allgradeup();
    });
});


allgradeup();

//store the value to compare if it changed or not and update grades
function allgradeup() {
    for (let c = 1; c <= countValue; c++) {
        let Element = document.getElementById(`stdgrade${c}`);
        let Value = Element.value;
        let roundedValue = Math.round(Value);

        let Element2 = document.getElementById(`stdgrade1${c}`);
        let Value2 = Element2.value;
        let roundedValue2 = Math.round(Value2);

        console.log(Element);
        //validation value if more than the limit 

        // Element 1
        if (roundedValue > maxgrade1) {
            document.getElementById(`stdgrade${c}`).value = maxgrade1;
            roundedValue = maxgrade1;
        }
        if (roundedValue < mingrade) {
            document.getElementById(`stdgrade${c}`).value = 0;
            roundedValue = mingrade;
        }
        document.getElementById(`stdgrade${c}`).value = roundedValue;




        //Element 2 
        if (roundedValue2 > maxgrade2) {
            document.getElementById(`stdgrade1${c}`).value = maxgrade2;
            roundedValue2 = maxgrade2;
        }
        if (roundedValue2 < mingrade) {
            document.getElementById(`stdgrade1${c}`).value = 0;
            roundedValue2 = mingrade;
        }
        document.getElementById(`stdgrade1${c}`).value = roundedValue2;


        let sum = roundedValue2 + roundedValue;
        //store value in arr 
        if (fristtime == 1) {
            arr[c] = roundedValue;
            arr3[c] = roundedValue2;
        }
        if (sum >= 93) {
            document.getElementById(`ga${c}`).textContent = "A+";
            document.getElementById(`pres${c}`).textContent = 4;
        } else if (sum >= 85) {
            document.getElementById(`ga${c}`).textContent = "A";
            document.getElementById(`pres${c}`).textContent = 3.75;
        } else if (sum >= 80) {
            document.getElementById(`ga${c}`).textContent = "B+";
            document.getElementById(`pres${c}`).textContent = 3.4;
        } else if (sum >= 75) {
            document.getElementById(`ga${c}`).textContent = "B";
            document.getElementById(`pres${c}`).textContent = 3;
        } else if (sum >= 70) {
            document.getElementById(`ga${c}`).textContent = "C+";
            document.getElementById(`pres${c}`).textContent = 2.75;
        } else if (sum >= 65) {
            document.getElementById(`ga${c}`).textContent = "C";
            document.getElementById(`pres${c}`).textContent = 2.5;
        } else if (sum >= 60) {
            document.getElementById(`ga${c}`).textContent = "D+";
            document.getElementById(`pres${c}`).textContent = 2.25;
        } else if (sum >= 50) {
            document.getElementById(`ga${c}`).textContent = "D";
            document.getElementById(`pres${c}`).textContent = 2;
        } else {
            document.getElementById(`ga${c}`).textContent = "F";
            document.getElementById(`pres${c}`).textContent = 0;
        }
    }
    fristtime = 0;
}

/*                            Start  Add bouns function                       */

function AddBounds() {
    for (let c = 1; c <= countValue; c++) {
        let Element = document.getElementById(`stdgrade${c}`);
        let Value = parseFloat(Element.value) + bouns;

        // Validation: check if the value exceeds the limit
        if (Value > maxgrade1) {
            Value = maxgrade1;
        }

        let roundedValue = Value.toFixed(1); // Round the value to one decimal place

        document.getElementById(`stdgrade${c}`).value = roundedValue;
        //arr2[c] = roundedValue;
    }
    allgradeup()
}


/*                             submit contorl                                      */


/*                                Start Submit button                                         */

function submitForm() {

    for (let c = 1; c <= countValue; c++) {
        let Element2 = document.getElementById(`stdgrade1${c}`);
        let Value2 = Element2.value;



        let Element = document.getElementById(`stdgrade${c}`);
        let Value = Element.value;
        //validation value if more than the limit 
        // if (Value > maxgrade1) {
        //     document.getElementById(`stdgrade${c}`).value = maxgrade1;
        //     Value = maxgrade1;
        // }
        // if (Value < mingrade) {
        //     document.getElementById(`stdgrade${c}`).value = mingrade;
        //     Value = mingrade;
        // }
        arr4[c] = Value2;
        arr2[c] = Value;
        // compare if the value didn't change removo it before submit
        if (arr2[c] == arr[c]) {
            document.getElementById(`stdgrade${c}`).remove();
            document.getElementById(`stdid${c}`).remove();
        }
        if (arr3[c] == arr4[c]) {
            document.getElementById(`stdgrade1${c}`).remove();
            //document.getElementById(`stdid${c}`).remove();

        }
    }


    //location.reload();
    form.submit();
}

/*                               End Submit button                                         */
/*                               End Submit button                                         */