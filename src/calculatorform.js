import {rates, salaries, board} from './constants.js';
import jsPDF from "jspdf";
import accounting from "accounting-js";

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
usernames.addEventListener('click', AddHours);

DropDownItems();
AddHours();

function DropDownItems() {
  for (const [key, value] of Object.entries(board)) {
    let opt = document.createElement("option");
    opt.textContent = key;
    usernames.add(opt);
  }
}
function AddHours() {
  const div = document.getElementById("hrs");
  if (board[usernames.value] === "Supervisor"){
    div.style.display = "block";
    // move user to enter hours page
    //window.location.href = "./../src/hours.html";
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
  // clear any previous created tables
  RemoveCreatedTable("tblmtgs");
  RemoveCreatedTable("tblhours");
  RemoveCreatedTable("tblmiles");
  RemoveCreatedTable("tblmisc");
  // complete prnt section 
  InputPDF();
  // add any needed tables
  if (userinputs.omtgs > 0) {
    let item = document.getElementById("tblmtgs");
    if (item.hasChildNodes) {item.removeChild};
    let tbl = addTable(userinputs.omtgs, 2, ["Date", "Other Official Meeting Description"], ["15%", "85%"]);
    item.appendChild(tbl);
  }
  // complete the hours for supervisors
  
  if (userinputs.title === "Supervisor") {
    let item = document.getElementById("supervisors");
    item.style.display = "block";
    if (userinputs.hours > 0) {
      item = document.getElementById("tblhours");
      if (item.hasChildNodes) {item.removeChild};
      let tbl = addTable(4, 3, ["Date", "Description", "Hours"], ["15%", "75%", "10%"]);
      item.appendChild(tbl);
    }
  }
  else {
    const item = document.getElementById("supervisors");
    item.style.display = "none";
  }
  // complete the miles section
  if (userinputs.miles > 0) {
    const item = document.getElementById("tblmiles");
    if (item.hasChildNodes) {item.removeChild};
    let tbl = addTable(3, 3, ["Date", "Description", "Miles"], ["15%", "75%", "10%"]);
    item.appendChild(tbl);
  }
   // complete the miscs section
   if (userinputs.misc > 0) {
    const item = document.getElementById("tblmisc");
    if (item.hasChildNodes) {item.removeChild};
    let tbl = addTable(3, 3, ["Date", "Description", "Amount"], ["15%", "75%", "10%"]);
    item.appendChild(tbl);
  }
  
  //update the payroll amounts
  AssignOutputs("sum");
 
 // asgin the rates table for reference
  let item = document.getElementById("refmeeting");
  item.textContent = "$" + rates.meetings.rate.toString() + rates.meetings.accounting; 
  item = document.getElementById("refmedicare");
  item.textContent = (100*rates.medicare.rate).toFixed(2).toString() + rates.medicare.unit; 
  item = document.getElementById("refpera");
  item.textContent = (100*rates.pera.rate).toFixed(2).toString() + rates.pera.unit; 
  item = document.getElementById("refmileage");
  item.textContent = "$" + rates.mileage.rate.toFixed(3).toString() + rates.mileage.unit;
  item = document.getElementById("refphone");
  item.textContent = "$" + rates.phone.rate.toFixed(0).toString() + rates.phone.unit;  
  item = document.getElementById("refinternet");
  item.textContent = "$" + rates.internet.rate.toFixed(0).toString() + rates.internet.unit; 
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
  //remove all tables

}
function CheckInputs()  {
  //check all inputs are completed
  userinputs["name"] = document.getElementById("dropdownList").value;
  userinputs["title"] = board[userinputs.name];
  userinputs["hours"] = GetValue("hours");
  userinputs["bmtgs"] = GetCheckedValue("bmtgs");
  userinputs["omtgs"] = GetCheckedValue("omtgs");
  userinputs["phone"] = GetCheckedValue("phone");
  userinputs["internet"] = GetCheckedValue("internet");
  userinputs["pera"] = GetCheckedValue("pera");
  userinputs["miles"] = GetValue("miles");
  userinputs["misc"] = GetValue("misc");

  const userobj = Object.entries(userinputs);
  
  for (const [key, value] of userobj) {
    if (value === false) {
      alert(`Please complete the ${key}.`);
      return;
    }
  } 
  userinputs["mtgs"] =  sum(GetCheckedValue("bmtgs"), GetCheckedValue("omtgs"));
  Calculate ();
}
function Calculate () {
  // calculate outputs
  userpay["salary"] = getSalary();
  userpay["mtgs"] = Number(multiply(sum(userinputs.bmtgs, userinputs.omtgs),rates.meetings.rate).toFixed(2));
  userpay["totalwage"] = Number(sum(userpay.salary, userpay.mtgs).toFixed(2));
  userpay["pera"] = -1*Number(multiply(userpay.totalwage, rates.pera.rate*userinputs.pera).toFixed(2));
  userpay["medicare"] = -1*Number(multiply(userpay.totalwage, rates.medicare.rate).toFixed(2));
  userpay["net"] = Number(sum(userpay.totalwage, sum(userpay.pera, userpay.medicare)).toFixed(2));
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
  AssignOutputs("op");
}
function GetValue (myString) {
  const input = document.getElementById(`${myString}`);
  let amtString = input.value;
  if (amtString.charAt(0) === "$") {amtString = amtString.substring(1)};
  return Number(amtString);
}
function GetCheckedValue (myName) {
  const element = document.getElementsByName(`${myName}`);
  for (let i=0; i<element.length; i++){
    if (element[i].checked) {
      const val = Number(element[i].value);
      console.log(element, val);
      return val;
    }
  }
  //there are no checked values
  return false;
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
function AssignOutputs (mytable) {
  const entries = Object.entries(userpay);
  for (const [key, value] of entries) {
    const myString = mytable + key
    const div = document.getElementById(`${myString}`);
    div.textContent = value.toFixed(2);
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
function addTable(myrows,mycols, myArray, mywidths){
  let tbl = document.createElement('table');
  //create the header
  tbl.createTHead();
  let hdrow = tbl.tHead.insertRow(0);
  for (let i = 0; i<mycols; i++) {
    let cell = hdrow.insertCell(i);
    cell.innerHTML = myArray[i];
  }
  let tblbody = tbl.createTBody();
  for (let i=0; i<myrows; i++) {
    let mytr = tblbody.insertRow(i);
    for (let j=0; j<mycols; j++) {
      let mytd = mytr.insertCell(j);
      mytd.style.width = mywidths[j];
    }
  }
  return tbl;
}
function RemoveCreatedTable(mytable) {
let div = document.getElementById(`${mytable}`);
  while (div.firstChild) {
    div.removeChild(div.lastChild);
  }
}