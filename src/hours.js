import { setupInputs } from './inputs';

export function setupHours (userinputs, datatables) {
  
  const cancelbtn = document.getElementById('cancelbutton');
  const donebtn = document.getElementById('submitbutton');
  const addbtn = document.getElementById('printbutton');
 
  cancelbtn.addEventListener('click', () => {
    clear();
    setupInputs(userinputs, datatables);
  });
  donebtn.addEventListener('click', (e) => {
    if (validateForm(e)) { 
      save(userinputs, datatables);
      assignData(userinputs, datatables);
      setupInputs(userinputs, datatables);
    }
  });
  addbtn.addEventListener('click', (e) => {
    if (validateForm(e)) { 
      save(userinputs, datatables);
      clear();
    }
  });
}
function validateForm(e) {
  const myform = document.getElementById('hoursform');
    if(!myform.checkValidity()) {
      return false;
    }
    e.preventDefault();
    return true;
}
function save(userinputs, datatables)  {
  const day = document.getElementById("day");
  const desc = document.getElementById("description");
  let myarray = [];
  myarray[0] = day.value;
  myarray[1] = desc.value;
  myarray[2] = calculateHours();
  datatables.hours.push(myarray);
  assignData(userinputs, datatables);
  clear();
}
function clear () {
  document.getElementById("day").value = "";
  document.getElementById("description").value = "";
  document.getElementById("hr").value = 0;
  document.getElementById("min").value = 0;
}
function assignData (userinputs, datatables ) {userinputs.mtgs
  userinputs.hours = calculateTotals(datatables.hours);
}
function calculateHours() {

  const hrs = Number(document.getElementById('hr').value);
  const mins = Number(document.getElementById('min').value);
  return (hrs + mins).toFixed(2);
}
function calculateTotals(array) {
  let total = 0;
  for (let i=0; i < array.length; i++) {
    total = total + Number(array[i][2]);
  }
  return total.toFixed(2);
}

