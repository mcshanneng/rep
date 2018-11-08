//-------------------------------------------------------------------------------
// This is a script to enter the number of inputs and print out logical statements
// September 19, 2018
//-------------------------------------------------------------------------------

//Get the input value as a boolean --->this can be enforced later
var inputA = prompt("Enter the value of A...");
var inputB = prompt("Enter the value of B...");


//Someplace temporary to store our data
var logicString = "";
var logicExpression = null;

//Concatenate the values of A and B
logicString += "inputA = " + inputA;
logicString += "<br /><br />";

logicString += "inputB = " + inputB;
logicString += "<br /><br />";

//Gather the basic expressions and store them as a big string of text
logicExpression = inputA && inputB;
logicString += "A AND B = " + logicExpression + "<br />";

logicExpression = inputA || inputB;
logicString += "A OR B = " + logicExpression + "<br />";

logicExpression = !inputA;
logicString += "NOT(A) = " + logicExpression + "<br />";

logicExpression = !inputB;
logicString += "NOT(B) = " + logicExpression  + "<br />";

logicExpression = !!inputA;
logicString += "NOT(NOT(A)) = " + logicExpression  + "<br />";


//Include the special cases!

logicExpression = !inputA || inputB; //special case...note A-->B is the same as !A || B
logicString += "A --> B = " + logicExpression  + "<br />";

logicExpression = inputA === inputB;
logicString += "A === B = " + logicExpression  + "<br />";




//NOW Use a table format...
var tablefunction ""

tablefunction += <table>;
  tablefunction += <tr>;
  tablefunction += <th> A </th> <th> B </th> </tr>;
tablefunction += </table>;
//Output the final string as the text in the HTML file
document.body.innerHTML += logicString;
