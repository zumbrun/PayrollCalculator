import { setupInputs } from "./inputs";

export function setupForm (type, userinputs, datatables) {
  const mytitle = document.querySelector(".title");
  const cancelbtn = document.getElementById('cancelbutton');
  const donebtn = document.getElementById('submitbutton');
  const nextbtn = document.getElementById('printbutton');
  // initialize form
  let rowcnt = 1;
  customizeBottom(type);
  customizeTitle(type, rowcnt, mytitle) ;
  inputRowdata(type, 1, datatables);
 
  cancelbtn.addEventListener('click', () => {
    setupInputs(userinputs, datatables);
  });
  donebtn.addEventListener('click', (e) => {
    if (validateForm(e)) { 
      save(type, rowcnt, datatables, userinputs);
      setupInputs(userinputs, datatables);
    }
  });
  nextbtn.addEventListener('click', (e) => {
    if (validateForm(e)) { 
      // save current data
      save(type, rowcnt, datatables, userinputs);
      // update for next row
      rowcnt++;
      customizeTitle(type, rowcnt, mytitle);
      inputRowdata(type, rowcnt, datatables);
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
function save (type, rowcnt, datatables, userinputs)  {
  // saving results to an array
  let myarray = [];
  myarray[0] = document.getElementById("day").value;
  myarray[1] = document.getElementById("description").value;
  switch (type) {
    case "hours": 
      const hrs = Number(document.getElementById('hr').value);
      const mins = Number(document.getElementById('min').value);
      myarray[2] = Number((hrs + mins).toFixed(2));
      break;
    case "miles": 
      myarray[2] = Number(Number(document.getElementById("bmiles").value).toFixed(1));
      break;
    case "misc": 
      let result = document.getElementById("bmisc").value;
      if (result.startsWith("$")) {
        result = result.slice(1);
      }inputRowdata
      myarray[2] = Number(Number(result).toFixed(2));
      break;
    case "omtgs": 
      break;
  }
  datatables[type][rowcnt-1] = myarray;
  calculateTotals(type, datatables, userinputs);
  return ;
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
    case "misc": 
      document.getElementById("bmisc").value = "";
      break;
    case "omtgs": 
      break;
  }
}
function calculateTotals(type, datatables, userinputs) {
  let total = 0;
  const myarray = datatables[type];
  if (type === "omtgs") {
    userinputs[type] = myarray.length;
    return;
  }
  for (let i=0; i < myarray.length; i++) {
    total = total + myarray[i][2];
  }
  userinputs[type] = Number(total.toFixed(2));
}
function customizeBottom(type) {
  const hoursdiv = document.getElementById("myhours");
  const milesdiv = document.getElementById("mymiles");
  const miscdiv = document.getElementById("mymisc");
  const desc = document.getElementById("desclabel");
  
  hoursdiv.style.display = "none";
  milesdiv.style.display = "none";
  miscdiv.style.display = "none";
  
  switch (type) {
    case "hours": 
      desc.textContent = "Description of work";
      hoursdiv.style.display = "flex";
      break;
    case "miles": 
      desc.textContent = "Reason for mileage";
      milesdiv.style.display = "flex";
      document.getElementById("bmiles").attributes.required = true;
      break;
    case "misc": 
      desc.textContent = "Description of expense";
      miscdiv.style.display = "flex";
      document.getElementById("bmisc").attributes.required = true;
      break;
    case "omtgs":
      desc.textContent = "Description of meeting";
      break;
  }
}
function customizeTitle (type, rowcnt, mytitle) {
  let str = type + " - row " + rowcnt.toString();
  mytitle.textContent = str.charAt(0).toUpperCase() + str.slice(1);
}
function inputRowdata (type, rowcnt, datatables) {
  let i = rowcnt - 1;
  let myarray = datatables[type];
  console.log({myarray}, myarray.length, {rowcnt});
  if (myarray.length < rowcnt) {
    clear(type);
    return;
  }
  if (myarray[i].length === 0) {
    clear (type);
    return;
  }
  document.getElementById("day").value = myarray[i][0];
  document.getElementById("description").value = myarray[i][1];
  switch (type) {
    case "hours": 
      const hours = Number(myarray[i][2]);
      const hr = Number(hours.toFixed(0));
      const min = (hours - hr);
      document.getElementById("hr").value = hr;
      document.getElementById("min").value = min;
      break;
    case "miles": 
      document.getElementById("bmiles").value = myarray[i][2];
      break;
    case "misc":
      document.getElementById("bmisc").value = myarray[i][2];
      break;
    case "omtgs":
      break;
  }
}