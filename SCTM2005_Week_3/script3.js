//-------------------------------------------------------------------------------
// This is a script to enter the number of inputs and print out logical statements
// September 19, 2018
//-------------------------------------------------------------------------------

//Get the input value as a boolean --->this can be enforced later


//Functions
function tablefunction() {
  var inputA = prompt("Enter the value of A...");
  var inputB = prompt("Enter the value of B...");
  //Someplace temporary to store our data
  var logicString = "";
  var logicExpression = null;
    var table = document.getElementById("mytable");
    var row = table.insertRow(1);
var cell0 = row.insertCell(0);
var cell1 = row.insertCell(1);
var cell2 = row.insertCell(2);
var cell3 = row.insertCell(3);
var cell4 = row.insertCell(4);
var cell5 = row.insertCell(5);
var cell6 = row.insertCell(6);

cell0.innerHTML = inputA;
cell1.innerHTML = inputB;
cell2.innerHTML = inputA || inputB;
  logicExpression = !(inputA || inputB);
cell3.innerHTML = logicExpression;
cell4.innerHTML = !logicExpression;
cell5.innerHTML = FALSE;
cell6.innerHTML = (!logicExpression) || FALSE;
}



document.body.innerHTML += logicString;
