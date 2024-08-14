import { showFormspage } from "./formspage";
import { setupInputs } from "./inputs";

export function setupForm (type, userinputs, datatables) {
  const container = document.querySelector(".container");
  container.innerHTML = showFormspage();
  const mytitle = document.querySelector(".title");
  const clearbtn = document.getElementById('cancelbutton');
  const donebtn = document.getElementById('submitbutton');
  const nextbtn = document.getElementById('nextbutton');
  const prevbtn = document.getElementById('previousbutton');
  // initialize form
  let rowcnt = 1;
  showPrev(rowcnt, prevbtn);
  customizeBottom(type);
  customizeTitle(type, rowcnt, mytitle) ;
  inputRowdata(type, 1, datatables);
  // add event listerners to buttons
  clearbtn.addEventListener('click', (e) => {
    e.preventDefault();
    clear(type);
  });
  donebtn.addEventListener('click', (e) => {
    // check if there is anything there
    const day = document.getElementById("day").value;
    const desc = document.getElementById("description").value;
    if (day === null || day === "") {
      if (desc === null || desc === "") {
        //clear all fields and go back
        clear(type);
        setupInputs(userinputs, datatables);
      }
    }
    else if (validateForm(e)) { 
      save(type, rowcnt, datatables, userinputs);
      setupInputs(userinputs, datatables);
    }
  });
  nextbtn.addEventListener('click', (e) => {
    if (validateForm(e)) { 
      // save current data
      save(type, rowcnt, datatables, userinputs);
      // update for next row
      e.preventDefault();
      rowcnt++;
      showPrev(rowcnt, prevbtn)
      customizeTitle(type, rowcnt, mytitle);
      inputRowdata(type, rowcnt, datatables);
    }
  });
  prevbtn.addEventListener('click', (e) => {
    // check if any fields have been filled in
    const day = document.getElementById("day").value;
    const desc = document.getElementById("description").value;
    console.log({day}, {desc});
    if (day === null || day === "") {
      if (desc === null || desc === "") {
        // then clear all fields and go back
        clear(type);
        e.preventDefault();
        rowcnt = rowcnt - 1;
        console.log({rowcnt});
        showPrev(rowcnt, prevbtn);
        customizeTitle(type, rowcnt, mytitle);
        inputRowdata(type, rowcnt, datatables);
      }
    }
    else {
      if (validateForm(e)) {
        // save the data
        save(type, rowcnt, datatables, userinputs);
        // update for next row
        e.preventDefault();
        rowcnt--;
        showPrev(rowcnt, prevbtn)
        customizeTitle(type, rowcnt, mytitle);
        inputRowdata(type, rowcnt, datatables);
      }
    }
  });
}
function showPrev (rowcnt, prevbtn) {
  if (rowcnt <= 1) {
    prevbtn.style.display = "none";
  }
  else {
    prevbtn.style.display = "flex";
  }
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
      }
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
    default:
      break;
  }
}
function calculateTotals(type, datatables, userinputs) {
  let total = 0;
  const myarray = datatables[type];
  if (type === "omtgs") {
    userinputs[type] = myarray.length;
    userinputs.mtgs = Number(userinputs.omtgs) + Number(userinputs.bmtgs);
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
    default:
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
  //console.log({myarray}, myarray.length, {rowcnt});
  if (myarray.length < rowcnt) {
    clear(type);
    return;
  }
  if (myarray[i].length === 0) {
    clear(type);
    return;
  }
  document.getElementById("day").value = myarray[i][0];
  document.getElementById("description").value = myarray[i][1];
  switch (type) {
    case "hours": 
      const hours = Number(myarray[i][2]);
      const hr = Math.floor(hours);
      const min = (hours - hr);
      console.log({hours}, {hr}, {min});
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
    default:
      break;
  }
  return;
}