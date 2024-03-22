import { setupInputs } from './inputs';

export function setupHours (userinputs, datatables) {
  
  const cancelbtn = document.getElementById('cancelbutton');
  const donebtn = document.getElementById('submitbutton');
  const addbtn = document.getElementById('printbutton');
 
  cancelbtn.addEventListener('click', () => {
    clear();
    setupInputs(userinputs, datatables);
  });
  donebtn.addEventListener('click', () => {
    save(userinputs, datatables);
    assignData(userinputs, datatables)
    setupInputs(userinputs, datatables);
  });
  addbtn.addEventListener('click', () => {
    save(userinputs, datatables);
    clear();
  });
}
function save(userinputs, datatables)  {
  const day = document.getElementById("day");
  const desc = document.getElementById("description");
  let myarray = [];
  myarray[0] = day.value;
  myarray[1] = desc.value;
  myarray[2] = calculateHours();
  datatables.hours.data.push(myarray);
  assignData(userinputs, datatables);
  clear();
}
function clear () {
  document.getElementById("day").value = "";
  document.getElementById("description").value = "";
  document.getElementById("hr").value = 0;
  document.getElementById("min").value = 0;
}
function assignData (userinputs, datatables ) {
  userinputs.hours = calculateTotals(datatables.hours.data);
}
function calculateHours() {

  const hrs = Number(document.getElementById('hr').value).toFixed(2);
  const mins = Number(document.getElementById('min').value).toFixed(2);
  
  return hrs + mins;
}
function calculateTotals(array) {
  let total = 0;
  for (let i=0; i < array.length; i++) {
    total = total + Number(array[2]);
  }
  return total;
}

