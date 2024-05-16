
import jsPDF from "jspdf";
import {rates, salaries, board} from './constants.js';
import {userinputs, setUserinputs, datatables, setShowdiv} from './globalobjects.js';

/* localStorage.setItem("displayHours", "none");
localStorage.setItem("displayMisc", "none");
localStorage.setItem("displayMtgs", "none");
localStorage.setItem("displayMiles", "none"); */
const userpay = {
  mtgs: 0,
  salary: 0,
  totalwage: 0,
  pera: 0,
  medicare: 0,
  net: 0,
  mileage: 0,
  phone: 0,
  internet: 0,
  misc: 0,
 totalpay: 0
 };
 const mydatatable = {
  rows: 0,
  cols: 0,
  headings: [],
  width: [],
  data: [],
}
const submitButton = document.getElementById('submitbutton');
const cancelButton = document.getElementById('cancelbutton');
const printButton = document.getElementById('printbutton');
const hoursEntry = document.getElementById('hours');
const miscEntry = document.getElementById('misc');
const milesEntry = document.getElementById('miles');
const omtgsEntry = document.getElementById('omtgs');
let usernames = document.getElementById('dropdownList');
// assign values to inputs 
hoursEntry.value = userinputs.hours;
milesEntry.value = userinputs.miles;
miscEntry.value = userinputs.misc;
omtgsEntry.value = userinputs.omtgs;
// assign eventlisteners to open data input tables
hoursEntry.addEventListener('click', UpdateEvent);
miscEntry.addEventListener('click', UpdateEvent);
milesEntry.addEventListener('click', UpdateEvent);
omtgsEntry.addEventListener('click', UpdateEvent);
// assign button actions
submitButton.addEventListener('click', CheckInputs);
cancelButton.addEventListener('click', Cancel);
printButton.addEventListener('click', PrintPDF);
// show/hide hours entry for supervisors if names are reselected
usernames.addEventListener('click', ViewHours);
// populate dropdown menu with board members
DropDownItems();
// populate hours if default name on dropdown is a supervisor
ViewHours();
// function that will be used to populate any needed tables

// used to populate name dropdown
function DropDownItems() {
  for (const [key, value] of Object.entries(board)) {
    let opt = document.createElement("option");
    opt.textContent = key;
    usernames.add(opt);
  }
}
function UpdateEvent(e) {
  // sets up next page for type of inpput being collected
  /* localStorage.setItem("displayHours", "none");
  localStorage.setItem("displayMisc", "none");
  localStorage.setItem("displayMtgs", "none");
  localStorage.setItem("displayMiles", "none"); */
  let mynames = ["hours", "miles", "misc", "omtgs"];
  mynames.forEach ((element) => {
    setShowdiv(element, false);
    if (e.target.name === element) {setShowdiv(element, true);}
  });
  window.location.href = "events.html";
}
function ViewHours() {
  const div = document.getElementById("hrs");
  if (board[usernames.value] === "Supervisor"){
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
  // clear any previous created tables
  RemoveCreatedTable("tblmtgs");
  RemoveCreatedTable("tblhours");
  RemoveCreatedTable("tblmiles");
  RemoveCreatedTable("tblmisc");
  // complete prnt section for user inputs
  InputPDF();
  // add any needed tables
  if (userinputs.omtgs > 0) {
    CreateTable("omtgs");
  }
  // complete the hours for supervisors
  if (userinputs.title === "Supervisor") {
    let item = document.getElementById("supervisors");
    item.style.display = "block";
    if (userinputs.hours > 0) {
      CreateTable("hours")
    }
  }
  else {
    const item = document.getElementById("supervisors");
    item.style.display = "none";
  }
  // complete the miles section
  if (userinputs.miles > 0) {
     CreateTable("miles");
  }
   // complete the miscs section
   if (userinputs.misc > 0) {
    CreateTable("misc");
  }
  //update the payroll table
  AssignOutputs("sum");
 
 // assign the rates table for reference
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
    windowWidth: 675,
  });
}
function CheckInputs()  {
  let alertstr = "Please complete the ";
  let myvalue = document.getElementById("dropdownList").value;
  setUserinputs("name",myvalue);
  console.log(userinputs.name);
  setUserinputs("title", board[userinputs.name]);
  //check all inputs are completed
  let mykeys = ["hours","miles", "misc"];
  mykeys.forEach((element) => {
    let myvalue = GetValue(element);
    if (!myvalue) {return alert(alertstr + element)}
    else {setUserinputs(element, myvalue)};
  });
  mykeys = ["bmtgs","omtgs", "phone", "internet", "pera"];
  mykeys.forEach((element) => {
    let myvalue = GetCheckedValue(element);
    if (!myvalue) {return alert(alertstr + element)}
    else {setUserinputs(element, myvalue)};
  });
// all is complete  
  setUserinputs("mtgs", sum(GetCheckedValue("bmtgs"), GetCheckedValue("omtgs")));
  console.log(userinputs.mtgs);
  Calculate ();
}
function Calculate () {
  // calculate outputs
  userpay.salary = getSalary();
  userpay.mtgs = Number(multiply(sum(userinputs.bmtgs, userinputs.omtgs),rates.meetings.rate).toFixed(2));
  userpay.totalwage = Number(sum(userpay.salary, userpay.mtgs).toFixed(2));
  userpay.pera = -1*Number(multiply(userpay.totalwage, rates.pera.rate*userinputs.pera).toFixed(2));
  userpay.medicare = -1*Number(multiply(userpay.totalwage, rates.medicare.rate).toFixed(2));
  userpay.net = Number(sum(userpay.totalwage, sum(userpay.pera, userpay.medicare)).toFixed(2));
  userpay.phone = Number(multiply(userinputs.phone, rates.phone.rate).toFixed(2));
  userpay.internet = Number(multiply(userinputs.internet, rates.internet.rate).toFixed(2));
  userpay.mileage = Number(multiply(userinputs.miles, rates.mileage.rate).toFixed(2));
  userpay.misc = userinputs.misc;
  userpay.totalpay = userpay.net + userpay.mileage + userpay.phone + userpay.internet + userpay.misc;
 
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
function addTable(mytable){
  let tbl = document.createElement('table');
  //create the header
  tbl.createTHead();
  let hdrow = tbl.tHead.insertRow(0);
  for (let i = 0; i < mytable.cols; i++) {
    let cell = hdrow.insertCell(i);
    cell.innerHTML = mytable.headings[i];
  }
  let tblbody = tbl.createTBody();
  for (let i=0; i < mytable.rows; i++) {
    let mytr = tblbody.insertRow(i);
    for (let j=0; j < mytable.cols; j++) {
      let mytd = mytr.insertCell(j);
      mytd.style.width = mytable.width[j];
      mytd.innerHTML = mytable.data[i][j];
    };
  };
  return tbl;
}
function RemoveCreatedTable(mytable) {
let div = document.getElementById(`${mytable}`);
  while (div.firstChild) {
    div.removeChild(div.lastChild);
  }
}
function CreateTable (myname) {
  let mykeys = ["hours","miles", "misc", "omtgs"];
  let myarray = [];
  for (const [key, value] of datatables) {
    if (key === myname ) {myarray = key.date.value;}
    if (myarray.length === 0) {return};
  }
  let mytable = Object.create(mydatatable);
  mytable.rows = myarray.length;
  mytable.cols = myarray[0].length;
  if (mytable.cols === 2) {
    mytable.headings = ["Date", "Description",];
    mytable.width = ["15%", "85%"];}
  else {
    mytable.headings = ["Date", "Description", "Expense"];
    mytable.width = ["15%", "75%", "10%"];
  }
  mytable.data = myarray;
  const str = "tbl" + myname;
  item = document.getElementById(`${str}`);
  if (item.hasChildNodes) {item.removeChild};
  let tbl = addTable(mytable);
  item.appendChild(tbl);
}
/* function GetStoredValues () {
  let myarray = [];
  Object.keys(localStorage).forEach(function(key) {
    console.log({key});
    console.log(localStorage.getItem(key));
    if (key.includes("mydata")) {
      const myevent = [];
      console.log({key});
      let text = localStorage.getItem(key);
      let obj = JSON.parse(text);
      console.log(obj);
      for (let i = 0; i < obj.length; i++){
        myevent[i] = obj[i];
        console.log(myevent[i]);
      }
      myarray.push(myevent);
      localStorage.removeItem(key); 
    }
  }); 
  //console.log({myarray});
  return myarray;
}*/