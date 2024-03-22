import {board} from './constants.js'
import { showInputpage } from './inputspage.js';
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
  container.innerHTML = showInputpage();
  
  const submitbtn = document.getElementById("submitbutton");
  const hoursEntry = document.getElementById('hours');
  const miscEntry = document.getElementById('misc');
  const milesEntry = document.getElementById('miles');
  const omtgsEntry = document.getElementById('omtgs');

  submitbtn.addEventListener("click", () => {
    if (checkInputs(userinputs)) {
      saveUserinputs(userinputs);
      showOutputspage(userinputs);
      setupOutputs(userinputs, datatables);
    }
  });
  hoursEntry.addEventListener('click', () => {
      container.innerHTML = showHourspage();
      setupHours(userinputs, datatables);
    });
  miscEntry.addEventListener('click', () => 
    {
      container.innerHTML = showMiscpage();
      setupMisc(userinputs, datatables)
    });
  milesEntry.addEventListener('click', () => 
    {
      container.innerHTML = showMilespage();
      setupMiles(userinputs, datatables)
    });
  omtgsEntry.addEventListener('click', () => 
    {
      container.innerHTML = showOmtgspage();
      setupOmtgs(userinputs, datatables)
    });

  hoursEntry.value = userinputs.hours;
  milesEntry.value = userinputs.miles;
  miscEntry.value = userinputs.misc;
  omtgsEntry.value = userinputs.omtgs;

  let usernames = document.getElementById('dropdownList');
  dropDownItems(usernames);

  // populate hours if default name on dropdown is a supervisor
  usernames.addEventListener('click', viewHours);
  viewHours(usernames);
}
function dropDownItems(usernames) {
  for (const [key, value] of Object.entries(board)) {
    let opt = document.createElement("option");
    opt.textContent = key;
    usernames.add(opt);
  }
}
function viewHours(usernames) {
  const div = document.getElementById("hrs");
  if (board[usernames.value] === "Supervisor"){
    div.style.display = "block";
  }
  else {
    div.style.display = "none";
  }
}
function checkInputs(userinputs)  {
  for (const [key, value] of Object.entries(userinputs)) {
    let div = document.getElementById(`${key}`);
    if (div) {
      if (!(div.value || div.checked)) {
        alertstr("Please complete the " + key);
        return false;
      }
    }
  }
  return true;
}
function saveUserinputs (userinputs) { 
  for (const [key, value] of Object.entries(userinputs)) {
    let div = document.getElementById(`${key}`);
    if (div) {
      if (div.value || div.checked) {
        if (amtString.charAt(0) === "$") {amtString = amtString.substring(1)};
        userinputs[key] = div.value;
      }
    }
  }
  userinputs.mtgs = userinputs.omtgs + userinputs.bmtgs
}
