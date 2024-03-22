import jsPDF from "jspdf";

//print payroll form
export function printPDF(userinputs, userpay, datatables) {
  const mydatatable = {
    rows: 0,
    cols: 0,
    headings: [],
    width: [],
    data: [],
}
  // clear any previous created tables
  removeCreatedTable("tblmtgs");
  removeCreatedTable("tblhours");
  removeCreatedTable("tblmiles");
  removeCreatedTable("tblmisc");
  // complete prnt section for user inputs
  inputPDF();
  // add any needed tables
  if (userinputs.omtgs > 0) {
    createTable("omtgs");
  }
  // complete the hours for supervisors
  if (userinputs.title === "Supervisor") {
    let item = document.getElementById("supervisors");
    item.style.display = "block";
    if (userinputs.hours > 0) {
      createTable("hours")
    }
  }
  else {
    const item = document.getElementById("supervisors");
    item.style.display = "none";
  }
  // complete the miles section
  if (userinputs.miles > 0) {
     createTable("miles");
  }
   // complete the miscs section
   if (userinputs.misc > 0) {
    createTable("misc");
  }
  //update the payroll table
  assignOutputs("sum");
 
 // assign the rates table for reference
  let item = document.getElementById("refmeeting");
  item.textContent = "$" + rates.meetings.rate.toString() + rates.meetings.accounting; 
  item = document.getElementById("refmedicare");
  item.textContent = (100*rates.medicare.rate).toFixed(2).toString() + rates.medicare.unit; 
  item = document.getElementById("refpera");
  item.textContent = (100*rates.pera.rate).toFixed(2).toString() + rates.pera.unit; 
  item = document.getElementById("refmileage");
  item.textContent = "$" + rates.mileage.rate.toFixed(3).toString() + rates.mileage.unit;
  item = document.getElementById("refphone");
  item.textContent = "$" + rates.phone.rate.toFixed(0).toString() + rates.phone.unit;  
  item = document.getElementById("refinternet");
  item.textContent = "$" + rates.internet.rate.toFixed(0).toString() + rates.internet.unit; 
  item = document.getElementById("refsup");
  item.textContent = "$" + salaries.supervisor.rate.toString() + salaries.supervisor.unit; 
  item = document.getElementById("refclerk");
  item.textContent = "$" + salaries.clerk.rate.toString() + salaries.clerk.unit;  
  item = document.getElementById("refdepclerk");
  item.textContent = "$" + salaries.deputyclerk.rate.toString() + salaries.deputyclerk.unit;  
  item = document.getElementById("reftreas");
  item.textContent = "$" + salaries.treasurer.rate.toString() + salaries.treasurer.unit;  
  item = document.getElementById("refdeptreas");
  item.textContent = "$" + salaries.deputytreasurer.rate.toString() + salaries.deputytreasurer.unit;  
  
  const doc = new jsPDF();

  const printform = document.querySelector(".printform");
  doc.html(printform.innerHTML, {
    callback: function(doc) {
      doc.save('payroll.pdf');
    },
    margin:[10,10,10,10],
    autoPaging: 'text',
    x: 0,
    y: 0,
    width: 190,
    windowWidth: 675,
  });
}
function inputPDF () {
  const entries = Object.entries(userinputs);
  for (const [key, value] of entries) {
    const myString = "prnt" + key
    const div = document.getElementById(`${myString}`);
    if (div) {
      div.textContent = value;
      if (key === "phone" || key === "internet") {
        div.textContent = 'NO';
        if (value === 1) {div.textContent = 'YES'};  
      };
    };
  };
}
function assignOutputs (mytable) {
  const entries = Object.entries(userpay);
  for (const [key, value] of entries) {
    const myString = mytable + key
    const div = document.getElementById(`${myString}`);
    div.textContent = value.toFixed(2);
  }  
}

function addTable(mytable){
  let tbl = document.createElement('table');
  //create the header
  tbl.createTHead();
  let hdrow = tbl.tHead.insertRow(0);
  for (let i = 0; i < mytable.cols; i++) {
    let cell = hdrow.insertCell(i);
    cell.innerHTML = mytable.headings[i];
  }
  let tblbody = tbl.createTBody();
  for (let i=0; i < mytable.rows; i++) {
    let mytr = tblbody.insertRow(i);
    for (let j=0; j < mytable.cols; j++) {
      let mytd = mytr.insertCell(j);
      mytd.style.width = mytable.width[j];
      mytd.innerHTML = mytable.data[i][j];
    };
  };
  return tbl;
}
function removeCreatedTable(mytable) {
let div = document.getElementById(`${mytable}`);
  while (div.firstChild) {
    div.removeChild(div.lastChild);
  }
}
function createTable (myname) {
  let mykeys = ["hours","miles", "misc", "omtgs"];
  let myarray = [];
  for (const [key, value] of datatables) {
    if (key === myname ) {myarray = key.date.value;}
    if (myarray.length === 0) {return};
  }
  let mytable = Object.create(mydatatable);
  mytable.rows = myarray.length;
  mytable.cols = myarray[0].length;
  if (mytable.cols === 2) {
    mytable.headings = ["Date", "Description",];
    mytable.width = ["15%", "85%"];}
  else {
    mytable.headings = ["Date", "Description", "Expense"];
    mytable.width = ["15%", "75%", "10%"];
  }
  mytable.data = myarray;
  const str = "tbl" + myname;
  item = document.getElementById(`${str}`);
  if (item.hasChildNodes) {item.removeChild};
  let tbl = addTable(mytable);
  item.appendChild(tbl);
}
