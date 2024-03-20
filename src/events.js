import './events.css';
import {userinputs, datatables, showdiv, getShowdiv} from './globalobjects.js';

let myeventarray = [];
console.log(getShowdiv("hours"));
// set up view
if (getShowdiv("hours")) {
  console.log("display hours");
  let div = document.getElementById('bottomhours');
  div.style.display = "block";
}
else if (getShowdiv("miles")) {SetBottom("miles")}
else if (getShowdiv("misc")) {SetBottom("misc")}
// assign button actions
const doneButton = document.getElementById('doneButton');
const addButton = document.getElementById('addButton');
const cancelButton = document.getElementById('cancelButton');

if (doneButton) {doneButton.addEventListener('click', Done);}
if (cancelButton) {cancelButton.addEventListener('click', Cancel)};
if (addButton) {addButton.addEventListener('click', AddEntry)};

function SetBottom(str) {   
  let input = document.createElement("input");
  input.type = "number";
  input.value = "";
  input.id = "bottomip";
  let lbl = document.createElement('label');
  lbl.innerHTML = "Enter " + str + " :";
  lbl.setAttribute("for", "bottomip");
  const div = document.getElementById('bottomamount');
  div.appendChild(lbl);
  div.appendChild(input);
  div.style.display = "block" 
}
  //return from events to outputs
function Cancel() {
  window.location.href = "index.html";
}
// save data and return
function Done () {
  SaveInputs();
  StoreInputs(myeventarray);
  let total = CalculateTotals(myeventarray);
  if (getShowdiv("hours")) {userinputs.hours = Number(total.toFixed(2))};
  if (getShowdiv("miles")) {userinputs.miles = Number(total.toFixed(2))};
  if (getShowdiv("misc")) {userinputs.misc = Number(total.toFixed(2))};
  if (getShowdiv("omtgs")) {userinputs.omtgs = total};
  
  /* if (localStorage("displayHours") === "block") {
    userinputs.hours = Number(total.toFixed(2));
  }
  else if (localStorage("displayMiles") === "block") {
    userinputs.miles = Number(total.toFixed(2));
  }
  else if (localStorage("displayMisc") === "block") {
    userinputs.misc = Number(total.toFixed(2));
  }
  else {
    userinputs.omtgs = myeventarray.length;
  } */
  Cancel();
}
// save data
function SaveInputs()  {
  let myarray = [];
  myarray[0] = document.getElementById("day").value;
  myarray[1] = document.getElementById("description").value;
  if (showdiv.hours) {myarray[2] = CalculateHours();}
  else {
    const element = document.getElementById("bottomip");
    if (element) {myarray[2] = Number(element.value.toFixed(2))};
  }
  myeventarray.push(myarray);
  console.log(myeventarray);
  return;
}
function StoreInputs(array) {
    if (showdiv.hours) {
      datatables.hours.exist = true;
      datatables.hours.data = array;
    }
    else if (showdiv.miles) {
      datatables.miles.exist = true;
      datatables.miles.data = array;
    }
    else if (showdiv.misc) {
      datatables.misc.exist = true;
      datatables.misc.data = array;
    }
    else if (showdiv.omtgs) {
      datatables.omtgs.exist = true;
      datatables.omtgs.data = array;
    }
    /* for (let i = 0; i < array.length; i++) {
      const myjson = JSON.stringify(array[i]);
      console.log({myjson});
      localStorage.setItem("mydata" + i, myjson);
    }; */
}
function AddEntry() {
  SaveInputs();
  // clear inputs for next entry
  document.getElementById("day").value = "";
  document.getElementById("description").value = "";
  if (showdiv.hours) {
    document.getElementById("hr").value = 0;
    document.getElementById("min").value = 0;}
  else {
    let div = document.getElementById('bottomip');
    if (div) {div.value = ""};
  }
}
function CalculateTotals(array) {
  let total = 0;
  for (let i=0; i<array.length; i++) {
    total = total + Number(array[2]);
  }
  return total;
}
function CalculateHours() {
  const hrs = Number(document.getElementById("hr").value);
  const mins = Number(document.getElementById("min").value);
  return Number((hrs + mins).toFixed(2));
}


