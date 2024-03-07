import {rates, salaries, board} from './constants.js';
import jsPDF from "jspdf";
let userpay = {
  "mtgs": 0,
  "salary": 0,
  "totalwage": 0,
  "pera": 0,
  "medicare": 0,
  "net": 0,
  "mileage": 0,
  "phone": 0,
  "internet": 0,
  "misc": 0,
  "totalpay": 0
  };
let userinputs = {
  "name": "-",
  "title": "-",
  "hours": 0,
  "bmtgs": 0,
  "omtgs": 0,
  "mtgs": 0,
  "pera": 0,
  "phone": 0,
  "internet": 0,
  "miles": 0,
  "misc":0
}

const submitButton = document.getElementById('submitbutton');
const cancelButton = document.getElementById('cancelbutton');
const printButton = document.getElementById('printbutton');
let usernames = document.getElementById('dropdownList');

submitButton.addEventListener('click', CheckInputs);
cancelButton.addEventListener('click', Cancel);
printButton.addEventListener('click', PrintPDF);

dropDownItems();

function dropDownItems() {
  for (const [key, value] of Object.entries(board)) {
    let opt = document.createElement("option");
    opt.textContent = key;
    //opt.value = value;
    usernames.add(opt);
  }
}
//operator functions on most recent 2 numbers
function sum (a,b) { return(a + b)};
function subtract (a,b) {return(a - b)};
function multiply (a,b) {return( a * b) };
function divide (a,b) { b != 0 ? a / b : "Dividing by zero is not allowed."};

  //return from outputs to inputs
function Cancel() {
  const inputs = document.querySelector(".inputs");
  inputs.style.display = "block";
  const outputs = document.querySelector(".outputs");
  outputs.style.display = "none";
}
//print payroll form
function PrintPDF() {
  // const outputs = document.querySelector(".outputs");
  // outputs.style.display = "none";
  // const printform = document.querySelector(".printform");
  // printform.style.display = "block";

  // complete prnt section 
  InputPDF();
  // add any needed tables
  if (userinputs.omtgs > 0) {
    const item = document.getElementById("tblmtgs");
    addTable(userinputs.omtgs, 2);
    item.appendChild(addTable(3,3));
  }
  // complete the hours for supervisors
  if (userinputs.hours > 0 || userinputs.miles > 0) {
    const item = document.getElementById("tblhoursmiles");
    item.appendChild(addTable(3,4));
  }
  else{
    const item = document.getElementById("prnthoursmiles")
    item.textContent = "None";
  }
  // complete the misc section
  if (userinputs.misc > 0) {
    const item = document.getElementById("tblmisc");
    item.appendChild(addTable(3,3));
  }
  else {
    const item = document.getAnimations("prntmisc")
    item.textContent = "None";
  }
  
  //update the payroll amounts
  let item = document.getElementById("sumwage");
  item.textContent = userpay.totalwage
  item = document.getElementById("sumpera");
  item.textContent = userpay.pera
  item = document.getElementById("summedicare");
  item.textContent = userpay.medicare;
  item = document.getElementById("sumnet");
  item.textContent = userpay.net;
  item = document.getElementById("summileage");
  item.textContent = userpay.mileage;
  item = document.getElementById("sumphone");
  item.textContent = userpay.phone;
  item = document.getElementById("sumint");
  item.textContent = userpay.internet;
  item = document.getElementById("summisc");
  item.textContent = userpay.misc;
  item = document.getElementById("sumtot");
  item.textContent = userpay.totalpay;
  //update the rates table
  item = document.getElementById("refmeeting");
  item.textContent = "$" + rates.meetings.rate.toString() + "/mtg"; 
  item = document.getElementById("refmedicare");
  item.textContent = (100*rates.medicare.rate).toFixed(2).toString() + "%"; 
  item = document.getElementById("refpera");
  item.textContent = (100*rates.pera.rate).toFixed(2).toString() + "%"; 
  item = document.getElementById("refmileage");
  item.textContent = "$" + rates.mileage.rate.toFixed(3).toString() + "/mile";
  item = document.getElementById("refphone");
  item.textContent = "$" + rates.phone.rate.toFixed(0).toString() + "/qtr";  
  item = document.getElementById("refint");
  item.textContent = "$" + rates.internet.rate.toFixed(0).toString() + "/qtr"; 
  //update the salary table
  item = document.getElementById("refsup");
  item.textContent = "$" + salaries.supervisor.rate.toString() + salaries.supervisor.unit; 
  item = document.getElementById("refclerk");
  item.textContent = "$" + salaries.clerk.rate.toString() + salaries.clerk.unit;  
  item = document.getElementById("refdepclerk");
  item.textContent = "$" + salaries.deputyclerk.rate.toString() + salaries.deputyclerk.unit;  
  item = document.getElementById("reftreas");
  item.textContent = "$" + salaries.treasurer.rate.toString() + salaries.treasurer.unit;  
  item = document.getElementById("refdeptreas");
  item.textContent = "$" + salaries.deputytreasurer.rate.toString() + salaries.deputytreasurer.unit;  
  
  const doc = new jsPDF();

  const printform = document.querySelector(".printform");
  doc.html(printform.innerHTML, {
    callback: function(doc) {
      doc.save('payroll.pdf');
    },
    margin:[10,10,10,10],
    autoPaging: 'text',
    x: 0,
    y: 0,
    width: 190,
    windowWidth: 675
  });
}
function CheckInputs()  {
  let field = "complete";
  //check all inputs are completed
  userinputs["name"] = document.getElementById("dropdownList").value;
  userinputs["title"] = board[userinputs.name];
  userinputs["hours"] = GetValue("hours");
  userinputs["bmtgs"] = Number(document.querySelector("input[name=bmtgs]:checked").value);
  userinputs["omtgs"] = Number(document.querySelector("input[name=omtgs]:checked").value);
  userinputs["phone"] = Number(document.querySelector("input[name=phone]:checked").value);
  userinputs["internet"] = Number(document.querySelector("input[name=internet]:checked").value);
  userinputs["miles"] = GetValue("miles");
  userinputs["misc"] = GetValue("misc");
  userinputs["pera"] = Number(document.querySelector("input[name=pera]:checked").value);

  const userobj = Object.entries(userinputs);
  
  for (const [key, value] of userobj) {
    if (value === undefined) {field=key};
  } 
  if (field === "complete") {
    Calculate ();
  }
  else {
    alert(`Please complete the ${field}.`);
  }
}
function Calculate () {
  // calculate outputs
  userpay["salary"] = getSalary();
  userpay["mtgs"] = Number(multiply(sum(userinputs.bmtgs, userinputs.omtgs),rates.meetings.rate).toFixed(2));
  userpay["totalwage"] = Number(sum(userpay.salary, userpay.mtgs).toFixed(2));
  userpay["pera"] = Number(multiply(userpay.totalwage, rates.pera.rate*userinputs.pera).toFixed(2));
  userpay["medicare"] = Number(multiply(userpay.totalwage, rates.medicare.rate).toFixed(2));
  userpay["net"] = Number(subtract(userpay.totalwage, sum(userpay.pera, userpay.medicare)).toFixed(2));
  userpay["phone"] = Number(multiply(userinputs.phone, rates.phone.rate).toFixed(2));
  userpay["internet"] = Number(multiply(userinputs.internet, rates.internet.rate).toFixed(2));
  userpay["mileage"] = Number(multiply(userinputs.miles, rates.mileage.rate).toFixed(2));
  userpay["misc"] = userinputs.misc;
  userpay["totalpay"] = userpay.net + userpay.mileage + userpay.phone + userpay.internet + userpay.misc;
 
  const inputs = document.querySelector(".inputs");
  inputs.style.display = "none";
  const outputs = document.querySelector(".outputs");
  outputs.style.display = "flex";
  
  // assign outputs
  AssignOutputs();
}
function GetValue (myString) {
  const input = document.getElementById(`${myString}`);
  let amtString = input.value;
  if (amtString.charAt(0) === "$") {amtString = amtString.substring(1)};
  return Number(amtString);
}
function InputPDF () {
  const entries = Object.entries(userinputs);
  for (const [key, value] of entries) {
    const myString = "prnt" + key
    const div = document.getElementById(`${myString}`);
    if (div) {
      div.textContent = value;
      if (key === "phone" || key === "internet") {
        div.textContent = 'NO';
        if (value === 1) {div.textContent = 'YES'};  
      };
    };
  };
}
function AssignOutputs () {
  const entries = Object.entries(userpay);
  for (const [key, value] of entries) {
    const myString = "op" + key
    const div = document.getElementById(`${myString}`);
    if (key === "pera" || key === "medicare") {
      div.textContent = "$ " + "(" + value + ")";
    }
    else {
      div.textContent = "$ " + value;
    }
  }  
}
const getSalary = () => {
  const str = userinputs.title.replace(/\s/g, "").toLowerCase();
  console.log({str});
  for (const [key, value] of Object.entries(salaries)) {
    console.log({key},{value});
    if (str === key) {
      console.log({key},{value});
      console.log(value.rate);
      if (key === "supervisor") {
        return Number(multiply(userinputs.hours, value.rate).toFixed(2));
    } 
      return Number((value.rate).toFixed(2));
    }
  }
}; 
function addTable(myrows,mycols){
  let tbl = document.createElement('table');
  let tblbody = document.createElement('body');
  tbl.appendChild(tblbody);

  for (let i=0; i<=myrows; i++) {
    let mytr = document.createElement('tr');
    tblbody.appendChild(mytr);
    for (let j=0; j<mycols; j++) {
      let mytd = document.createElement('td');
      mytd.innerText = "Cell" + i + "," + j;
      mytr.appendChild(mytd);
    }
  }
  return tbl;
}