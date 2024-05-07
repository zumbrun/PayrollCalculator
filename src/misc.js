import { setupInputs } from './inputs';

export function setupMisc (userinputs, datatables) {
  
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
      assignData(userinputs, datatables)
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
  const myform = document.getElementById('miscform');
    if(!myform.checkValidity()) {
      return false;
    }
    e.preventDefault();
    return true;
}
function save(userinputs, datatables)  {
  let myarray = [];
  myarray[0] = document.getElementById("day").value;
  myarray[1] = document.getElementById("description").value;
  let result = document.getElementById("bmisc").value;
  if (result.startsWith("$")) {
    result = result.slice(1);
  }
  myarray[2] = Number(result).toFixed(2);
  datatables.misc.push(myarray);
  assignData(userinputs, datatables);
  clear();
}
function clear () {
  document.getElementById("day").value = "";
  document.getElementById("description").value = "";
  document.getElementById("bmisc").value = "";
}
function assignData (userinputs, datatables ) {
  userinputs.misc = calculateTotals(datatables.misc);
}
function calculateTotals(array) {
  let total = 0;
  for (let i=0; i < array.length; i++) {
    total = total + Number(array[i][2]);
  }
  return total;
}