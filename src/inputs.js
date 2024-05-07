import {board} from './constants.js'
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
  
  // add event listeners to all the inputs so can update userinputs
  const usernames = document.getElementById('name');
  usernames.addEventListener('click', () => {
    // populate hours if default name on dropdown is a supervisor
    viewHours(usernames.value);
    userinputs.name = usernames.value;
    userinputs.title = board[userinputs.name];
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
      userinputs.mtgs = userinputs.bmtgs + userinputs.omtgs;
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
  // set up the dropdown of names 
  dropDownItems(usernames);
  // show the selected name
  setDropdownName(userinputs, usernames);
  // show hours
  viewHours(userinputs.name);

  // assign inputs from userinputs
  hoursEntry.value = userinputs.hours;
  milesEntry.value = Number(userinputs.miles).toFixed(1);
  miscEntry.value = "$ " + Number(userinputs.misc).toFixed(2);
  omtgsEntry.value = userinputs.omtgs;
  radiobmtgs.value = userinputs.bmtgs;
  radiointernet.value = userinputs.internet;
  radiophone.value = userinputs.phone;
  radiopera.value = userinputs.pera;
}
function dropDownItems(usernames) {
  for (const [key, value] of Object.entries(board)) {
    let opt = document.createElement("option");
    opt.textContent = key;
    usernames.add(opt);
  }
}
function setDropdownName(userinputs, usernames) {
  if (userinputs.name === null) {
    usernames.selectedIndex = 0;
    userinputs.name = usernames.value;
  }
  else {
    for (const [key, value] of Object.entries(board)) {
      if (userinputs.name === key) {usernames.value = key;}
    }
  }
  userinputs.title = board[userinputs.name];
}
function viewHours(username) {
  if (board[username] === "Supervisor") {
    document.getElementById("hrs").style.display = "flex";
  }
  else {
    document.getElementById("hrs").style.display = "none";
  }
}

