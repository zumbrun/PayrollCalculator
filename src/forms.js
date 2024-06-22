import { setupInputs } from "./inputs";

export function setupForm (type, userinputs, myarray) {
  showAmounts(type);
  const cancelbtn = document.getElementById('cancelbutton');
  const donebtn = document.getElementById('submitbutton');
  const nextbtn = document.getElementById('printbutton');
 
  cancelbtn.addEventListener('click', () => {
    setupInputs(userinputs, myarray);
  });
  donebtn.addEventListener('click', (e) => {
    if (validateForm(e)) { 
      save(type, userinputs, myarray);
      setupInputs(userinputs, myarray);
    }
  });
  nextbtn.addEventListener('click', (e) => {
    if (validateForm(e)) { 
      save(type, userinputs, myarray);
    }
  });
}
function validateForm(e) {
    const myform = document.getElementById('myform');
      if(!myform.checkValidity()) {
        return false;
      }
      e.preventDefault();
      return true;
}
function save(type, userinputs, array)  {
  let myarray = [];
  myarray[0] = document.getElementById("day").value;
  myarray[1] = document.getElementById("description").value;
  switch (type) {
    case "hours": 
      const hrs = Number(document.getElementById('hr').value);
      const mins = Number(document.getElementById('min').value);
      myarray[2] = (hrs + mins).toFixed(2);
      userinputs.hours = calculateTotals(myarray);
      document.getElementById("hr").value = 0;
      document.getElementById("min").value = 0;
      break;
    case "miles": 
      myarray[2] = Number(document.getElementById("bmiles").value).toFixed(1);
      userinputs.miles = calculateTotals(array);
      document.getElementById("bmiles").value = "";
      break;
    case "misc": 
      myarray[2] = calculateHours();
      let result = document.getElementById("bmisc").value;
      if (result.startsWith("$")) {
        result = result.slice(1);
      }
      myarray[2] = Number(result).toFixed(2);
      userinputs.misc = calculateTotals(datatables.misc);
      document.getElementById("bmisc").value = "";
      break;
    case "omtgs": 
      userinputs.omtgs = array.length;
      break;
  }
  array.push(myarray);
  clear();
}
function clear () {
  document.getElementById("day").value = "";
  document.getElementById("description").value = "";
}
function calculateTotals(array) {
  let total = 0;
  for (let i=0; i < array.length; i++) {
    total = total + Number(array[i][2]);
  }
  return total.toFixed(2);
}
function showAmounts(type) {
  
  const hoursdiv = document.getElementById("myhours");
  const milesdiv = document.getElementById("mymiles");
  const miscdiv = document.getElementById("mymisc");
  hoursdiv.style.display = "none";
  milesdiv.style.display = "none";
  miscdiv.style.display = "none";
  switch (type) {
    case "hours": 
      hoursdiv.style.display = "flex";
      break;
    case "miles": 
      milesdiv.style.display = "flex";
      break;
    case "misc": 
      miscdiv.style.display = "flex";
      break;
    case "omtgs": 
      break;
  }

}

