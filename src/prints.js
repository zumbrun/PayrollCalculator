import jsPDF from "jspdf";
import { rates, salaries } from './constants.js';
import { showPrintpage } from './printpage.js';
import { setupInputs } from "./inputs.js";
import { setupOutputs } from "./outputs.js";
import { setupSign } from "./sign.js";

export function setupReview(userinputs, datatables) {
  const container = document.querySelector(".container");
  container.innerHTML = showPrintpage();
  // complete prnt sections for all userinputs and userpay
  const userpay = setupOutputs(userinputs, datatables);
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
        if (mytable.rows.length > 1) {
          mytable = addTotalRow(mytable, userinputs[element]);
        }
        if (element === "misc") { mytable = formatCurrency(mytable)}
        else if (element === "miles") {mytable = formatFixed(mytable, 1)}
        else if (element === "hours") {mytable = formatFixed(mytable, 2)}
      }
      else {
        mytable.classList.add("twocols");
      }
    }
  }); 
 // assign the rate and salary reference tables
  createRateTable();
  createSalaryTable();
// add event listener to when buttons are clicked
   const submitbtn = document.getElementById("submitbutton");
   submitbtn.addEventListener("click", () => {
    //e.preventDefault();
    setupSign(userinputs, datatables);
    // printPDF(userinputs);
   });
   const clearbtn = document.getElementById("backbutton");
   clearbtn.addEventListener("click", () => {
    //e.preventDefault();
    setupInputs(userinputs, datatables);
   });
   const printbtn = document.getElementById("printbutton");
   printbtn.addEventListener("click", (e) => {
    printPDF(userinputs);;
   });
}
export function printPDF (userinputs) {
  const doc = new jsPDF();

  const printform = document.querySelector(".printform");

  doc.html(printform.innerHTML, {
    callback: function(doc) {
      doc.save(`${userinputs.name}` + '_payroll.pdf');
    },
    margin:[10,10,10,10],
    autoPaging: 'text',
    x: 0,
    y: 0,
    width: 190,
    windowWidth: 675,
    fontSize: 8,
  });
}
export function assignUserinputs (userinputs) {
  let item = document.getElementById("supervisors");
  if (userinputs.title === "Supervisor") {item.style.display = "block";}
  else {item.style.display = "none"};
  const entries = Object.entries(userinputs);
  for (const [key, value] of entries) {
    const myString = "ip" + key
    const div = document.getElementById(`${myString}`);
    if (div) {
      //underline the responses
      div.style.textDecoration = 'underline';
      //assign NO if 0 else nothing
      if (Number(value) === 0) { div.textContent = "NONE" }
      else if (myString === "ipphone" || myString === "ipinternet" || myString === "ippera") { div.textContent = "YES" }
      else {
        div.textContent = userinputs[key];
      }
    }
  };
  if (userinputs.signature) {
    console.log("userinputs.signature");
    let img = new Image();
    img.src = userinputs.signature;
    img.classList.add("image");
    document.querySelector('.signature').appendChild(img);
  }
  let mydate = document.getElementById('ipdate');
  mydate.textContent = Intl.DateTimeFormat('en').format(new Date());
}
function assignUserpay (userpay) {
  const entries = Object.entries(userpay);
  for (const [key, value] of entries) {
    const myString = "sum" + key
    const div = document.getElementById(`${myString}`);
    if (div) {
      div.textContent = Number(value).toFixed(2);
    }
  }  
}
function addTableData(mytable, mydata) {
  for (let i=0; i < mydata.length; i++) {
    let mytr = mytable.insertRow(-1);
    for (let j=0; j < mydata[i].length; j++) {
      let mytd = mytr.insertCell(j);
      mytd.textContent = mydata[i][j];
    };
  };
  return mytable;
}
function formatCurrency(mytable) {
  for (let i=1; i < mytable.rows.length; i++) {
    mytable.rows[i].cells[2].textContent = "$" + Number(mytable.rows[i].cells[2].textContent).toFixed(2);
  }
  return mytable;
}
function formatFixed(mytable, n) {
  let str = "0";
  for (let i=1; i < mytable.rows.length; i++) {
    str = mytable.rows[i].cells[2].textContent;
    str = str + "0001";
    if (n === 1) {
      str = Number(mytable.rows[i].cells[2].textContent).toFixed(1);
    }
    else {
      str = Number(mytable.rows[i].cells[2].textContent).toFixed(2);
    }
    mytable.rows[i].cells[2].textContent = str;
  }
  return mytable;
}
function addTotalRow(mytable, mytotal) {
  let newrow = mytable.insertRow(-1);
  for (let i = 0; i < 3; i++) {
    let td = newrow.insertCell(i);
    if (i === 1) {td.textContent = "TOTAL"};
    if (i === 2) {td.textContent = mytotal};
  }
  newrow.classList.add("totalrow");
  return mytable;
}
function deleteTableRows(mytable) {
  for ( let i = 1; i < mytable.rows.length; i++ ) {
    mytable.deleteRow(i);
  };
//    if (item.hasChildNodes) {item.removeChild};
//    item.appendChild(mytable);
  return mytable;
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