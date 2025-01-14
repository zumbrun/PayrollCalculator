import { board } from './constants.js';
import { showInputspage } from './inputspage.js';
import { setupForm } from './forms.js';
import { setupReview} from './prints.js';

export function setupInputs(userinputs, datatables) {
  const container = document.querySelector(".container");
  container.innerHTML = showInputspage();
  // initialize dropdown
  const nameDropdown = initializeDropdown(userinputs);
  // collect all form inputs
  const hoursEntry = document.getElementById('hours');
  const miscEntry = document.getElementById('misc');
  const milesEntry = document.getElementById('miles');
  const omtgsEntry = document.getElementById('omtgs');
  const radiobmtgs = document.forms["inputform"].elements['bmtgs'];
  const radiophone = document.forms["inputform"].elements['phone'];
  const radiointernet = document.forms["inputform"].elements['internet'];
  const radiopera = document.forms["inputform"].elements['pera'];
 
  // add event listeners to all the inputs so can update userinputs
  nameDropdown.addEventListener('click', (e) => {
    const selectedOption = e.target;
    if (selectedOption !== 0) {
      userinputs.name = selectedOption.value;
      userinputs.title = board[userinputs.name];
    }
    else {
      userinputs.name = null;
      userinputs.title = null;
    }
    hoursEntry.value = updateHours(userinputs);
  });
  hoursEntry.addEventListener('click', () => {
    setupForm("hours", userinputs, datatables);
  });
  miscEntry.addEventListener('click', () => {
    setupForm("misc", userinputs, datatables)
  });
  milesEntry.addEventListener('click', () => {
    setupForm("miles", userinputs, datatables)
  });
  omtgsEntry.addEventListener('click', () => {
    setupForm("omtgs", userinputs, datatables)
  });  
  for (let i = 0; i < radiobmtgs.length; i++) {
    radiobmtgs[i].addEventListener("click", () => {
      userinputs.bmtgs = radiobmtgs[i].value;
      userinputs.mtgs = Number(userinputs.bmtgs) + Number(userinputs.omtgs);
    });
  }
  for (let i = 0; i < radiophone.length; i++) {
    radiophone[i].addEventListener("click", () => {
      userinputs.phone = radiophone[i].value;
    });
  }
  for (let i = 0; i < radiointernet.length; i++) {
    radiointernet[i].addEventListener("click", () => {
      userinputs.internet = radiointernet[i].value;
    });
  }
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
    setupReview(userinputs, datatables);
  });
  // add event listener to when clear button is clicked
  const clearbtn = document.getElementById("backbutton");
  clearbtn.addEventListener("click", (e) => {
    e.preventDefault();
    clearStoredData(userinputs,datatables);
    clearInputs();
  });
  // assign inputs from userinputs
  hoursEntry.value = updateHours(userinputs);
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
  dropdown.innerHTML = '<option value="">Select an option</option>';
  // populate the dropdown
  for (const [key, value] of Object.entries(board)) {
    let opt = document.createElement("option");
    opt.textContent = key;
    dropdown.add(opt);
  }
  // setup the username
  if (userinputs.name !== null) {
    for (const [key, value] of Object.entries(board)) {
      if (userinputs.name === key) {
        dropdown.value = key;
        userinputs.title = board[userinputs.name];
      }
    }
  }
  return dropdown;
}
function updateHours(userinputs) {
  let hours = "";  
  if (userinputs.name) {
    if (userinputs.title === "Supervisor") {
      hours = Number(userinputs.hours).toFixed(2);
    }
    else {
      hours = "N.A.";
      userinputs.hours = 0;
    }
  }
  else {
    hours = Number(userinputs.hours).toFixed(2);
  }
  return hours;
}
function clearStoredData(userinputs,datatables) {
  // clear all userinputs
  userinputs.name =  null;
  userinputs.title = null;
  userinputs.hours = 0;
  userinputs.bmtgs = null;
  userinputs.omtgs = 0;
  userinputs.mtgs = 0;
  userinputs.pera = null;
  userinputs.phone = null;
  userinputs.internet = null;
  userinputs.miles = 0;
  userinputs.misc = 0;
  userinputs.signature=null;
  // clear all datatables
  datatables.hours = [[]];
  datatables.miles = [[]];
  datatables.misc =  [[]];
  datatables.omtgs = [[]];
  // clear name
  initializeDropdown(userinputs);
}
function clearInputs() {
  //clear all radiobuttons
  const myform = document.getElementById('inputform');
  const radios = document.querySelectorAll('input[type="radio"]');
  for (const radio of radios) {
    radio.checked = false;
  }
  // clear all totals
  const hours = document.getElementById('hours');
  const misc = document.getElementById('misc');
  const miles = document.getElementById('miles');
  const omtgs = document.getElementById('omtgs');
  hours.value = "0.00";
  omtgs.value = 0;
  miles.value = "0.0";
  misc.value = "$0.00";
}