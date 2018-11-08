var inputA = prompt("Enter the value of A...");
var inputB = prompt("Enter the value of B...");
var tablefunction = "";
var tableStr = null
tablefunction += "<table style= width:100%>";
  tablefunction += "<tr>";
  tablefunction += "<td> A </td> <td> B </td> <td> A AND B</td>";
  tablefunction += "<td> A OR B</td> <td> NOT (A)</td> <td> NOT (B)</td>";
  tablefunction +=  "<td> NOT (NOT (A))</td> </tr>";
    tablefunction += "<tr> <td>" + inputA + "</td>";
    tablefunction += "<td>" + inputB + "</td>";
    tablefunction += "<td>" + inputA&&inputB + "</td>";
    tablefunction += "<td>" + inputA||inputB + "</td>";
    tablefunction += "<td>" + !inputA + "</td>";
    tablefunction += "<td>" + !inputB + "</td>";
    tablefunction += "<td>" + !(!inputA) + "</td></tr>";
tablefunction += "</table>";

document.body.innerHTML = tablefunction
