var a = ""
var b = ""

var getboolean = function Getbln() {
  a = document.getElementById("Input1").value
   if (a == true)
          {
            return true;
          }
  if (a == 'true')
          {
            return true;
          }
  if (a == '1')
          {
            return true;
          }
          else{
      return false
    }
    document.getElementById.innerHTML}
  var getboolean2 = function Getbln2() {
      b = document.getElementById("Input2").value
       if (b == true)
              {
                return true;
              }
      if (b == 'true')
              {
                return true;
              }
      if (b == '1')
              {
                return true;
              }
              else{
          return false
        }
        document.getElementById.innerHTML}

function tablefunction() {
a = (getboolean)(document.getElementById("Input1").value);
b = (getboolean2)(document.getElementById("Input2").value);
  var table = document.getElementById("mytable");
  var row = table.insertRow(1);
var cell0 = row.insertCell(0);
var cell1 = row.insertCell(1);
var cell2 = row.insertCell(2);
var cell3 = row.insertCell(3);
var cell4 = row.insertCell(4);
var cell5 = row.insertCell(5);
var cell6 = row.insertCell(6);
var cell7 = row.insertCell(7);
var cell8 = row.insertCell(8);
cell0.innerHTML = a;
cell1.innerHTML = b;
cell2.innerHTML = a && b;
cell3.innerHTML = a || b;
cell4.innerHTML = !a;
cell5.innerHTML = !b;
cell6.innerHTML = !!a;
cell7.innerHTML = !a || b;
cell8.innerHTML = a === b
}




document.body.innerHTML
