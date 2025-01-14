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
  const userpay = setupOutputs(userinputs);
  assignUserinputs(userinputs, userpay);
  assignUserpay(userpay);
  // add and complete add any needed tables
  let types = ["omtgs", "hours", "misc", "miles"];
  types.forEach(type => {
    let myid = 'prnt' + type;
    let div = document.getElementById(`${myid}`);
    div.style.display = "none";
    if (datatables[type].length > 0) {
      div.style.display = "block";
      // get table
      const str = "tbl" + type;
      let mytable = document.getElementById(`${str}`);
      mytable = addTableData(type, mytable, datatables[type]);
      mytable = fillFooterRow(type, mytable, userinputs);
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
  const doc = new jsPDF('p', 'pt', [612.0, 792.0]);

  const printform = document.querySelector(".printform");

  doc.html(printform.innerHTML, {
    callback: function(doc) {
      doc.save(`${userinputs.name}` + '_payroll.pdf');
      window.close();
    },
    margin:[20,20,20,20],
    autoPaging: 'text',
    x: 0,
    y: 0,
    width: 190,
    windowWidth: 675,
    fontSize: 8,
  });

}
export function assignUserinputs (userinputs) {
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
function addTableData(type, table, data) {
  console.log({data});
  const tbody = table.tBodies[0];
  for (let i=0; i < data.length; i++) {
    const newRow = document.createElement('tr');
    for (let j=0; j < data[i].length; j++) {
      console.log(data[i][j]);
      let cell  = document.createElement('td');
      if (type === "hours") {
        switch (j) {
          case 0, 1:
            cell.textContent = data[i][j];
          case 2:
            // add minutes data to hours
            cell.textContent = Number(Number(data[i][j]) + Number(data[i][j+1])).toFixed(2);
            break;
          case 3:
            cell.textContent = data[i][j+1];
            break;
          case 4:
            cell = null;
            break;
        }
      }
      else {
        cell.textContent = data[i][j];
      }
      if (cell) {
        newRow.appendChild(cell);
      }
    };
    tbody.appendChild(newRow);
  };
  return table;
}
function fillFooterRow(type, table, userinputs) {
  //get last row in array
  const tfoot = table.tFoot;
  const row = tfoot.rows[0];
  const cells = row.cells;
  switch (type) {
    case "hours": 
      cells[2].textContent = userinputs.hours.toFixed(2) +  " hrs";
      cells[3].textContent = userinputs.hoursmiles.toFixed(1) +  " miles";
      break;
    case "miles": 
      cells[2].textContent = userinputs.milesothers.toFixed(1) +  " miles";
      break;
    case "misc": 
      cells[2].textContent = userinputs.misc.toFixed(2) +  " miles";
      break;
    case "omtgs": 
      cells[1].textContent = userinputs.omtgs +  " mtgs";
      cells[2].textContent = userinputs.omtgsmiles.toFixed(1) +  " miles";
      break;
  }
  return table;
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