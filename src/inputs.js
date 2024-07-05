import { board } from './constants.js'
import { showInputspage } from './inputspage.js';
import { showFormspage } from './formspage.js'
import { showReviewpage } from './reviewpage.js';
import { setupForm } from './forms.js';
import { setupReview} from './review.js';

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
  let currentIndex = 0;
  console.log({currentIndex}, "initial");
  // add event listeners to all the inputs so can update userinputs
  nameDropdown.addEventListener('click', (e) => {
    const selectedOption = e.target;
    const newIndex = selectedOption.selectedIndex;
    let diff = newIndex - currentIndex;
    // it goes through this function twice and I don't want to clear form if it start from null name
    // because the user just didn't update name until after other fields so needed to check a diff
    if ((currentIndex !== 0) && (diff !== 0)){
      clearForm(userinputs, datatables, hoursEntry, miscEntry, milesEntry, omtgsEntry);
    }
    currentIndex = newIndex;
    userinputs.name = selectedOption.value;
    userinputs.title = board[userinputs.name];
    viewHours(userinputs);
  });
  hoursEntry.addEventListener('click', () => {
    container.innerHTML = showFormspage();
    setupForm("hours", userinputs, datatables);
  });
  miscEntry.addEventListener('click', () => {
    container.innerHTML = showFormspage();
    setupForm("misc", userinputs, datatables)
  });
  milesEntry.addEventListener('click', () => {
    container.innerHTML = showFormspage();
    setupForm("miles", userinputs, datatables)
  });
  omtgsEntry.addEventListener('click', () => {
    container.innerHTML = showFormspage();
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
    showReviewpage(userinputs);
    setupReview(userinputs, datatables);
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
  dropdown.innerHTML = '<option value="">Select an option</option>';
  // populate the dropdown
  for (const [key, value] of Object.entries(board)) {
    let opt = document.createElement("option");
    opt.textContent = key;
    dropdown.add(opt);
  }
  // setup the username
  console.log(userinputs.name, userinputs.title);
  if (userinputs.name !== null) {
    for (const [key, value] of Object.entries(board)) {
      if (userinputs.name === key) {
        dropdown.value = key;
        userinputs.title = board[userinputs.name];
        viewHours(userinputs);
      }
    }
  }
  else {
    dropdown.selectedOption = 0;
  }
  // setup the title
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
function clearForm(userinputs, datatables, hours, misc, miles, omtgs) {
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
  // clear all datatables
  datatables.hours = [[]];
  datatables.miles = [[]];
  datatables.misc =  [[]];
  datatables.omtgs = [[]];
  //clear all radiobuttons
  const myform = document.getElementById('inputform');
  const radios = document.querySelectorAll('input[type="radio"]');
  for (const radio of radios) {
    radio.checked = false;
  }
  // clear all totals
  hours.value = 0;
  omtgs.value = 0;
  miles.value = 0;
  misc.value = "$0.00";
}

