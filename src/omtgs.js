import { setupInputs } from './inputs';

export function setupOmtgs (userinputs, datatables) {
  
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
  datatables.omtgs.data.push(myarray);
  assignData(userinputs, datatables)
  clear();
}
function assignData (userinputs, datatables ) {
  userinputs.omtgs = datatables.omtgs.data.length;
}
function clear () {
  document.getElementById("day").value = "";
  document.getElementById("description").value = "";
}