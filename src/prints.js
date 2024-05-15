import jsPDF from "jspdf";
import { rates, salaries } from './constants.js';
import { showPrintpage } from './printpage.js';

//print payroll form
export function printPDF (userinputs, datatables, userpay ) {
  
  const container = document.querySelector(".container");
  //container.innerHTML = showPrintpage();

  container.insertAdjacentHTML('afterBegin', showPrintpage());
  // clear any previous created tables
  //removeAllTables();
  // complete prnt sections for all userinputs and userpay
  assignUserinputs(userinputs, userpay);
  assignUserpay(userpay);
  // add and complete add any needed tables
  let mytablenames = ["omtgs", "hours", "misc", "miles"];
  mytablenames.forEach(element => {
    let myid = 'prnt' + element;
    let div = document.getElementById(`${myid}`);
    div.style.display = "none";
    if (userinputs[element] > 0) {
      div.style.display = "block";
      // add data to table
      const str = "tbl" + element;
      let mytable = document.getElementById(`${str}`);
      mytable = deleteTableRows(mytable);
      mytable = addTableData(mytable, datatables[element]);
      //add css styling depending on column length
      if (mytable.rows[0].cells.length > 2) {
        mytable.classList.add("threecols");
        if (mytable.rows.length > 2) {
          mytable = addTotalRow(mytable, userinputs[element]);
        }
      }
      else {
        mytable.classList.add("twocols");
      } 
    }
  }); 
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
function assignUserinputs (userinputs, userpay) {
  let item = document.getElementById("supervisors");
  if (userinputs.title === "Supervisor") {item.style.display = "block";}
  else {item.style.display = "none"};
  const entries = Object.entries(userinputs);
  for (const [key, value] of entries) {
    const myString = "ip" + key
    const div = document.getElementById(`${myString}`);
    if (div) {
      const myarray = ["name", "title", "omtgs", "bmtgs"];
      console.log({key});
      //assign NONE is 0 else nothing
      if (Number(value) === 0) { div.textContent = "NONE" }
      else if (myarray.includes(key)) { div.textContent = value }
      else {
        console.log(userpay[key]);
        div.textContent = "$" + userpay[key]
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
    if (div) {
      div.textContent = value.toFixed(2);
    }
  }  
}
function addTableData(mytable, mydata) {
  for (let i=0; i < mydata.length; i++) {
    let mytr = mytable.insertRow(-1);
    for (let j=0; j < mydata[i].length; j++) {
      let mytd = mytr.insertCell(j);
      mytd.textContent = mydata[i][j];
      if (j === 2) {
        mytd.textContentL = Number(mytd.textContent).toFixed(2);
      }
    };
  };
  return mytable;
}
function addTotalRow(mytable, mytotal) {
  let newrow = mytable.insertRow(-1);
  for (let i = 0; i < 3; i++) {
    let td = newrow.insertCell(i);
    if (i === 1) {td.textContent = "TOTAL"};
    if (i === 2) {td.textContent = mytotal.toFixed(2)};
  }
  newrow.classList.add("totalrow");
  return mytable;
}
function deleteTableRows(mytable) {
  for ( let i = 1; i < mytable.rows.length; i++ ) {
    mytable.deleteRow(i);
  };
/*     if (item.hasChildNodes) {item.removeChild};
    item.appendChild(mytable);
  } */
  return mytable;
}
/* function removeAllTables() {
  let tables = document.getElementsByTagName('table');
  console.log(tables);
  for (let i=0; i < tables.length; i++) {
    let str = tables[i].id.substring(0,2)
    if (str === "tbl") {
      tables[i].parentNode.removeChild(tables[i]);
    }
  };
} */
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