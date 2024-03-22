import { setupInputs } from './inputs';

export function setupMisc (userinputs, datatables) {
  
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
  let myarray = [];
  myarray[0] = document.getElementById("day").value;
  myarray[1] = document.getElementById("description").value;
  myarray[2] = Number(document.getElementById("bmisc").value).toFixed(2);
  datatables.misc.data.push(myarray);
  clear();
}
function clear () {
  document.getElementById("day").value = "";
  document.getElementById("description").value = "";
  document.getElementById("bmisc").value = "";
}
function assignData (userinputs, datatables ) {
  userinputs.misc = calculateTotals(datatables.misc.data);
}
function calculateTotals(array) {
  let total = 0;
  for (let i=0; i < array.length; i++) {
    total = total + Number(array[2]);
  }
  return total;
}
