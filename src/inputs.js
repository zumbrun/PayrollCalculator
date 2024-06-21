import { board } from './constants.js'
import { showInputspage } from './inputspage.js';
import { showMilespage } from "./milespage.js";
import { showHourspage } from "./hourspage.js";
import { showMiscpage  } from "./miscpage.js";
import { showOmtgspage  } from "./omtgspage.js";
import { showOutputspage } from './outputspage.js';
import {  setupMiles } from "./miles.js";
import {  setupHours } from "./hours.js";
import {  setupMisc } from "./misc.js";
import {  setupOmtgs } from "./omtgs.js";
import {  setupOutputs} from './outputs.js';

export function setupInputs(userinputs, datatables) {
  const container = document.querySelector(".container");
  container.innerHTML = showInputspage();
  //initialize dropdown
  const nameDropdown = initializeDropdown(userinputs);
  // add event listeners to all the inputs so can update userinputs
  nameDropdown.addEventListener('click', (e) => {
    const selectedOption = e.target;
    nameDropdown.value = selectedOption.value;
    userinputs.name = selectedOption.value;
    userinputs.title = board[userinputs.name];
    viewHours(userinputs);
  });
  const hoursEntry = document.getElementById('hours');
  hoursEntry.addEventListener('click', () => {
    container.innerHTML = showHourspage();
    setupHours(userinputs, datatables);
  });
  const miscEntry = document.getElementById('misc');
  miscEntry.addEventListener('click', () => {
    container.innerHTML = showMiscpage();
    setupMisc(userinputs, datatables)
  });
  const milesEntry = document.getElementById('miles');
  milesEntry.addEventListener('click', () => {
    container.innerHTML = showMilespage();
    setupMiles(userinputs, datatables)
  });
  const omtgsEntry = document.getElementById('omtgs');
  omtgsEntry.addEventListener('click', () => {
    container.innerHTML = showOmtgspage();
    setupOmtgs(userinputs, datatables)
  });  
  const radiobmtgs = document.forms["inputform"].elements['bmtgs'];
  for (let i = 0; i < radiobmtgs.length; i++) {
    radiobmtgs[i].addEventListener("click", () => {
      userinputs.bmtgs = radiobmtgs[i].value;
      userinputs.mtgs = Number(userinputs.bmtgs) + Number(userinputs.omtgs);
    });
  }
  const radiophone = document.forms["inputform"].elements['phone'];
  for (let i = 0; i < radiophone.length; i++) {
    radiophone[i].addEventListener("click", () => {
      userinputs.phone = radiophone[i].value;
    });
  }
  const radiointernet = document.forms["inputform"].elements['internet'];
  for (let i = 0; i < radiointernet.length; i++) {
    radiointernet[i].addEventListener("click", () => {
      userinputs.internet = radiointernet[i].value;
    });
  }
  const radiopera = document.forms["inputform"].elements['pera'];
  for (let i = 0; i < radiopera.length; i++) {
    radiopera[i].addEventListener("click", () => {
      userinputs.pera = radiopera[i].value;
    });
  }
  // add event listener to when submit button is clicked
  const submitbtn = document.getElementById("submitbutton");
  submitbtn.addEventListener("click", (e) => {
    const inputform = document.getElementById('inputform');
    if(!inputform.checkValidity()) {
      return false;
    }
    e.preventDefault();
    showOutputspage(userinputs);
    setupOutputs(userinputs, datatables);
  });

  // assign inputs from userinputs
  hoursEntry.value = Number(userinputs.hours).toFixed(2);
  milesEntry.value = Number(userinputs.miles).toFixed(1);
  miscEntry.value = "$ " + Number(userinputs.misc).toFixed(2);
  omtgsEntry.value = userinputs.omtgs;
  radiobmtgs.value = userinputs.bmtgs;
  radiointernet.value = userinputs.internet;
  radiophone.value = userinputs.phone;
  radiopera.value = userinputs.pera;
}
function initializeDropdown(userinputs) {
  const dropdown = document.getElementById('name');
  // populate the dropdown
  for (const [key, value] of Object.entries(board)) {
    let opt = document.createElement("option");
    opt.textContent = key;
    dropdown.add(opt);
  }
  // setup the username
  if (userinputs.name !== null) {
    for (const [key, value] of Object.entries(board)) {
      if (userinputs.name === key) {dropdown.value = key;}
    }
  }
  else {
    dropdown.selectedOption = 0;
    userinputs.name = dropdown.value
  }
  // setup the title
  userinputs.title = board[userinputs.name];
  return dropdown;
}
function viewHours(userinputs) {
  if (userinputs.title === "Supervisor") {
    document.getElementById("hrs").style.display = "flex";
  }
  else {
    document.getElementById("hrs").style.display = "none";
  }
}

