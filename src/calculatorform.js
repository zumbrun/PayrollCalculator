import {rates, salaries} from './constants.js';
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
const jobtitle = document.getElementById('title');

submitButton.addEventListener('click', CheckInputs);
cancelButton.addEventListener('click', Cancel);
printButton.addEventListener('click', PrintPDF);
jobtitle.addEventListener('change', UpdateJob);

function UpdateJob() {
  userinputs["title"] = document.getElementById('title').value;
  
  // get and show hours table if appropriate
  const div = document.getElementById("hrs");
  console.log({div});
  console.log(userinputs.title)
  if (userinputs.title === "supervisor") {
    div.style.display = "block";
  }
  else {
    div.style.display = "none";
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

  //update the pdf fields saved in session storage
   //const bmtgs= multiply(userinputs.bmtgs, rates.meetings.rate );
   //const omtgs= multiply(userinputs.omtgs, rates.meetings.rate);
  let item = document.getElementById("prnttitle");
  item.textContent = userinputs.title; 
  item = document.getElementById("prntbmtgs");
  item.textContent = userinputs.bmtgs; 
  item = document.getElementById("prntomtgs");
  item.textContent = userinputs.omtgs;
  //update the payroll amounts
  item = document.getElementById("sumwage");
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
  userinputs["title"] = document.getElementById("title").value;
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
  console.log(userpay);
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
  let myvalue;
  for (const [key, value] of Object.entries(salaries)) {
    if (userinputs.title === key) {
      myvalue = value.rate
    }
  }
  if (userinputs.title === "supervisor") {
    myvalue = multiply(userinputs.hours, value);
  }
  return myvalue;
}; 