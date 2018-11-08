// Get inputs A and // B
  var inputA = prompt("Input value A");
  var inputB = prompt("Input value B");
//store input data
  var logicstring = ""
  var logicexpression = null
//table

//Concatenated values of A
  logicstring += "value A is "+ inputA;
  logicstring += "<br></br>";
    logicexpression =  !inputA;
  logicstring += "Not A is " + logicexpression;
  logicstring += "<br></br>";
//Concatenated values of B
  logicstring += "value B is "+ inputB;
  logicstring += "<br></br>";
    logicexpression = !inputB;
  logicstring += "Not B is " + logicexpression;
  logicstring += "<br></br>";
// AND for input A and B
    logicexpression = inputA&&inputB;
  logicstring += "A AND B is " + logicexpression;
// A or B
    logicexpression =
// Not A and Not B
//False
//Output as text
document.body.innerHTML +=logicstring
