import jsPDF from "jspdf";
import { rates, salaries } from './constants.js';
import { showPrintpage } from './printpage.js';

//print payroll form
export function printPDF (userinputs, datatables, userpay ) {
  const tablespec = {
    rows: 0,
    cols: 0,
    headings: [],
    width: [],
    data: [],
  }
  const container = document.querySelector(".container");
  //container.innerHTML = showPrintpage();

  container.insertAdjacentHTML('afterBegin', showPrintpage());
  // clear any previous created tables
  removeAllTables();
  // complete prnt sections for all userinputs and userpay
  assignUserinputs(userinputs);
  assignUserpay(userpay);
  // add and complete add any needed tables
  if (userinputs.omtgs > 0) {
    let mytablespec = createTablespec(tablespec, datatables.omtgs.data, "omtgs");
    const mytable = createTable(mytablespec);  
    appendTable("omtgs", mytable)
  }
  if (userinputs.hours > 0) {
    let mytablespec = createTablespec(tablespec, datatables.hours.data, "Hours");
    let mytable = createTable(mytablespec);  
    if (mytable.rows.length > 2) {
      mytable = addTotalRow(mytable, userinputs.hours);
    }
    appendTable("hours", mytable)
  }
  if (userinputs.miles > 0) {
    let mytablespec = createTablespec(tablespec, datatables.miles.data, "Miles");
    const mytable = createTable(mytablespec);  
    if (mytable.rows.length > 2) {
      mytable = addTotalRow(mytable, userinputs.miles);
    }
    appendTable("miles", mytable)
  }
   if (userinputs.misc > 0) {
    let mytablespec = createTablespec(tablespec, datatables.misc.data, "Expense");
    const mytable = createTable(mytablespec);  
    if (mytable.rows.length > 2) {
      mytable = addTotalRow(mytable, userinputs.misc);
    }
    appendTable("misc", mytable)
  }
 // assign the rate and salary reference tables
  createRateTable();
  createSalaryTable();
  
  const doc = new jsPDF();

  const printform = document.querySelector(".printform");
  //printform.style.display = "block";

  doc.html(printform.innerHTML, {
    callback: function(doc) {
      doc.save('payroll.pdf');
    },
    margin:[10,0,0,10],
    autoPaging: 'text',
    x: 0,
    y: 0,
    width: 190,
    windowWidth: 675,
  });  
}
function assignUserinputs (userinputs) {
  let item = document.getElementById("supervisors");
  if (userinputs.title === "Supervisor") {item.style.display = "block";}
  else {item.style.display = "none"};
  const entries = Object.entries(userinputs);
  for (const [key, value] of entries) {
    const myString = "ip" + key
    const div = document.getElementById(`${myString}`);
    if (div) {
      //assign NONE is 0 else nothing
      if (Number(value) === 0) {div.textContent = "NONE"}
      else {
        if (key === "phone" || key === "internet") {
          if (Number(value) === 1) {div.textContent = 'YES'};  
        };
        if (key === "omtgs" && Number(value) > 0 ) {div.textContent = value;}
      }
    }
  };
  const div = document.getElementById('ipdate');
  div.textContent = Intl.DateTimeFormat('en').format(new Date());
}
function assignUserpay (userpay) {
  const entries = Object.entries(userpay);
  for (const [key, value] of entries) {
    const myString = "sum" + key
    const div = document.getElementById(`${myString}`);
    div.textContent = value.toFixed(2);
  }  
}
function createTablespec (mytablespec, myarray, mystring) {
  if (myarray.length === 0) {return};
  mytablespec.rows = myarray.length;
  mytablespec.cols = myarray[0].length;
  mytablespec.data = myarray;
  if (mytablespec.cols === 2) {
    mytablespec.headings = ["Date", "Description",];
    mytablespec.width = ["15%", "85%"];}
  else {
    mytablespec.width = ["15%", "70%", "15%"];
    mytablespec.headings = ["Date", "Description", mystring];
  }
  return mytablespec;
}
function createTable(mytablespec) {
  let tbl = document.createElement('table');
  tbl.style.borderCollapse = "collapse"
  //create the header
  tbl.createTHead();
  let hdrow = tbl.tHead.insertRow(0);
  for (let i = 0; i < mytablespec.cols; i++) {
    let cell = hdrow.insertCell(i);
    cell.innerHTML = mytablespec.headings[i];
    if (i === 2) {
      cell.style.textAlign = "right";
    }
  }
  let tblbody = tbl.createTBody();
  for (let i=0; i < mytablespec.rows; i++) {
    let mytr = tblbody.insertRow(i);
    for (let j=0; j < mytablespec.cols; j++) {
      let mytd = mytr.insertCell(j);
      mytd.style.width = mytablespec.width[j];
      mytd.innerHTML = mytablespec.data[i][j];
      if (j === 2) {
        mytd.style.textAlign = "right";
        mytd.innerHTML = Number(mytablespec.data[i][j]).toFixed(2);
      }
    };
  };
  return tbl;
}
function addTotalRow(mytable, mytotal) {
  let newrow = mytable.insertRow(-1);
  newrow.style.borderWidth = "0";
  for (let i = 0; i < 3; i++) {
    let td = newrow.insertCell(i);
    td.style.borderWidth = "0"
    td.style.textAlign = "right";
    if (i === 1 ) {td.innerHTML = "TOTAL"};
    if (i === 2) {
      td.textContent = mytotal.toFixed(2);
      td.style.borderLeft = "1px solid black";
    }
  }
  mytable.style.borderCollapse = "collagpse";
  return mytable;
}
function appendTable(myname, mytable) {
  const str = "tbl" + myname;
  const item = document.getElementById(`${str}`);
  if (item.hasChildNodes) {item.removeChild};
  item.appendChild(mytable);
}
function removeAllTables() {
  let tables = document.getElementsByTagName('table');
  console.log(tables);
  for (let i=0; i < tables.length; i++) {
    let str = tables[i].id.substring(0,2)
    if (str === "tbl") {
      tables[i].parentNode.removeChild(tables[i]);
    }
  };
}
function createRateTable () {
  for (const [key, value] of Object.entries(rates)) {
    let str = "ref" + key; 
    let element = document.getElementById(`${str}`);
    if ((key === "medicare") || (key === "pera")) {
      element.textContent = (100*value.rate).toFixed(3) + value.unit;
    }
    else {
      element.textContent = "$" + value.rate + value.unit;
    }
  }
}
function createSalaryTable () {
  for (const [key, value] of Object.entries(salaries)) {
    let str = "ref" + key; 
    let element = document.getElementById(`${str}`);
    element.textContent = "$" + value.rate + value.unit;
  }
}