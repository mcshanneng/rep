var inputA = prompt("Enter the value of A...");
var inputB = prompt("Enter the value of B...");
var tablefunction = "";
var tableStr = null
tablefunction += "<table style= width:100%>";
  tablefunction += "<tr>";
  tablefunction += "<td> A </td> <td> B </td> <td> A OR B</td>";
  tablefunction += "<td> NOT(A OR B)</td> <td> NOT (NOT (A OR B))</td> <td> FALSE </td>";
  tablefunction +=  "<td> NOT (NOT (A OR B)) OR FALSE</td> </tr>";
    tablefunction += "<tr> <td>" + inputA + "</td>";
    tablefunction += "<td>" + inputB + "</td>";
    tablefunction += "<td>" + inputA||inputB + "</td>";
    tablefunction += "<td>" + !inputA||inputB + "</td>";
    tablefunction += "<td>" + !!inputA||inputB + "</td>";
    tablefunction += "<td>" + false + "</td>";
    tablefunction += "<td>" + !!inputA||input||false + "</td></tr>";
tablefunction += "</table>";

document.body.innerHTML = tablefunction
