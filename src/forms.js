import { setupInputs } from "./inputs";

export function setupForm (type, userinputs, datatables) {
  showAmounts(type);
  let rowcnt = 1;
  initializeData(type, datatables[type], rowcnt-1);
  const mytitle = document.querySelector(".title");
  const cancelbtn = document.getElementById('cancelbutton');
  const donebtn = document.getElementById('submitbutton');
  const nextbtn = document.getElementById('printbutton');
 
  cancelbtn.addEventListener('click', () => {
    setupInputs(userinputs, datatables);
    clear(type);
  });
  donebtn.addEventListener('click', (e) => {
    if (validateForm(e)) { 
      datatables[type] = save(type, userinputs, datatables[type]);
      setupInputs(userinputs, datatables);
    }
  });
  nextbtn.addEventListener('click', (e) => {
    if (validateForm(e)) { 
      datatables[type] = save(type, userinputs, datatables[type]);
      //clear(type);
      rowcnt++;
      console.log(rowcnt);
      mytitle.textContent = "Row" + rowcnt.toString();
      initalizeData(type, datatables[type], rowcnt-1);
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
      break;
    case "miles": 
      myarray[2] = Number(document.getElementById("bmiles").value).toFixed(1);
      break;
    case "misc": 
      let result = document.getElementById("bmisc").value;
      if (result.startsWith("$")) {
        result = result.slice(1);
      }
      myarray[2] = Number(result).toFixed(2);
      break;
    case "omtgs": 
      array.push(myarray);
      userinputs.omtgs = array.length;
      return array;
  }
  array.push(myarray);
  userinputs[type] = calculateTotals(array);
  return array;
}
function clear (type) {
  document.getElementById("day").value = "";
  document.getElementById("description").value = "";
  switch (type) {
    case "hours": 
      document.getElementById("hr").value = 0;
      document.getElementById("min").value = 0;
      break;
    case "miles": 
      document.getElementById("bmiles").value = "";
      break;
    case "misc": console.log({type});
      document.getElementById("bmisc").value = "";
      break;
    case "omtgs": 
      break;
  }
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
      document.getElementById("bmiles").attributes.required = true;
      break;
    case "misc": 
      miscdiv.style.display = "flex";
      document.getElementById("bmisc").attributes.required = true;
      break;
    case "omtgs": 
      break;
  }
}
function initalizeData(type, array, i) {
  console.log(array);
  if (array.length === 0) {return};
  document.getElementById("day").value = array[i][0];
  document.getElementById("description").value = array[i][1];
  if (array[i][2]) {
    switch (type) {
      case "hours": 
        const hours = Number(array[i][2]);
        const hr = Number(hours.toFixed(0));
        const min = (hours - hr);
        document.getElementById("hr").value = hr;
        document.getElementById("min").value = min;
        break;
      case "miles": 
        document.getElementById("bmiles").value = array[i][2];
        break;
      case "misc": 
        document.getElementById("bmisc").value = array[i][2];
        break;
    }
  }
}


