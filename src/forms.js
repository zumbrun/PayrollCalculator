import { showFormspage } from "./formspage";
import { setupInputs } from "./inputs";

export function setupForm (type, userinputs, datatables) {
  const container = document.querySelector(".container");
  container.innerHTML = showFormspage();
  const clearbtn = document.getElementById('cancelbutton');
  const donebtn = document.getElementById('submitbutton');
  const nextbtn = document.getElementById('nextbutton');
  const prevbtn = document.getElementById('previousbutton');
  // initialize form
  let rowcnt = 1;
  setTitle(type);
  customizeBottom(type);
  setupRow(rowcnt, prevbtn, type, datatables);
  // add event listerners to buttons
  clearbtn.addEventListener('click', () => {
    datatables[type] = removeRow(datatables[type], rowcnt);
    calculateTotals(type, datatables, userinputs);
    if (datatables[type].length === 0) {
      clear(type);
    }
    else {
      setupRow(rowcnt, prevbtn, type, datatables);
    }
  });
  donebtn.addEventListener('click', () => {
    let array = checkInputs(type);
    if (array.length === 0 ) {
      // form is complete
      save(type, rowcnt, datatables, userinputs);
      setupInputs(userinputs, datatables);
    }
    else if (array.length === 3 ) {
      // form is blank
      setupInputs(userinputs, datatables);
    }
    else {
      alert("Please complete " + array[0]);
    }
  });
  nextbtn.addEventListener('click', () => {
    let array = checkInputs(type);
    if (array.length === 0 ) {
      save(type, rowcnt, datatables, userinputs);
      rowcnt++;
      setupRow(rowcnt, prevbtn, type, datatables);
    }
    else {
      alert("Please complete " + array[0]);
    }
  });
  prevbtn.addEventListener('click', () => {
    let array = checkInputs(type);
    if (array.length === 0 ) {
      save(type, rowcnt, datatables, userinputs);
      rowcnt--;
      setupRow(rowcnt, prevbtn, type, datatables);
    }
    else if (array.length === 3 ) {
      // form is blank
      rowcnt--;
      setupRow(rowcnt, prevbtn, type, datatables);
    }
    else {
      alert("Please complete " + array[0]);
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
  userinputs[type] = total;
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
      break;
    case "misc": 
      desc.textContent = "Description of expense";
      miscdiv.style.display = "flex";
      break;
    case "omtgs":
      desc.textContent = "Description of meeting";
      break;
    default:
      break;
  }
}
function setTitle (type) {
  const mytitle = document.getElementById("title");
  let str = type;
  if (type === "omtgs") {str = "Other Meetings"}
  mytitle.textContent = str.charAt(0).toUpperCase() + str.slice(1);
}
function setupRow (rowcnt, prevbtn, type, datatables) {
  const myrow = document.getElementById("rowtitle");
  myrow.textContent = "Row " + rowcnt.toString();
  showPrev(rowcnt, prevbtn);
  inputRowdata(type, rowcnt, datatables);
}
function inputRowdata (type, rowcnt, datatables) {
  let i = rowcnt - 1;
  let myarray = datatables[type];
  if (myarray.length < rowcnt || myarray[i].length === 0) {
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
      document.getElementById("hr").value = hr;
      document.getElementById("min").value = min;
      break;
    case "miles": 
      document.getElementById("bmiles").value = myarray[i][2].toFixed(1);
      break;
    case "misc":
      document.getElementById("bmisc").value = myarray[i][2].toFixed(2);
      break;
    case "omtgs":
      break;
    default:
      break;
  }
  return;
}
function removeRow(array, index) {
  if (array.length <= 1) {
    array.length = 0;
    return array;
  }
  const newArray = [];
  // copy rows before the removed row
  for (let i = 0; i < index; i++) {
    newArray.push(array[i]);
  }
  for (let i = index + 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  console.log({newArray});
  return newArray;
}
function checkInputs(type) {
  let array = [];
  if (!document.getElementById("day").value) {array.push("date")};
  if (!document.getElementById("description").value) {array.push("description")};
  switch (type) {
    case "hours": 
      const hr = Number(document.getElementById('hr').value);
      const min = Number(document.getElementById('min').value);
      if (hr + min === 0) {
        array.push("hours");
      }
      break;
    case "miles": 
      if (!document.getElementById("bmiles").value) { array.push("miles") }
      break;
    case "misc": 
      if (!document.getElementById("bmisc").value) { array.push("misc expense")}
      break;
    case "omtgs": 
      if (array.length === 2) {
        //make it appear to be blank
        array.push("omtgs");
      }
      break;
  }
  console.log({array});
  return array;
}