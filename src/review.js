import { showReviewpage } from './reviewpage.js';
import { showInputspage } from './inputspage.js';
import { showOutputspage } from './outputspage.js';
import { setupOutputs } from './outputs.js';
import { setupInputs } from './inputs.js';
import { assignUserinputs } from './prints.js';

export function setupReview (userinputs, datatables, userpay ) {
  const container = document.querySelector(".container");
  container.innerHTML = showReviewpage();

   // add event listener to when buttons are clicked
   const submitbtn = document.getElementById("submitbutton");
   submitbtn.addEventListener("click", (e) => {
     showOutputspage(userinputs);
     setupOutputs(userinputs, datatables);
   });
   const clearbtn = document.getElementById("clearbutton");
   clearbtn.addEventListener("click", (e) => {
     showInputspage(userinputs);
     setupInputs(userinputs, datatables);
   });
  // complete sections for all userinputs
  assignUserinputs(userinputs);
  //assignUserpay(userpay);
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
        if (element === "misc") {
          mytable = formatCurrency(mytable);
        }
      }
      else {
        mytable.classList.add("twocols");
      }
    }
  });
  const printform = document.querySelector(".printform");
  printform.style.display = "block";    
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
    mytable.rows[i].cells[2].textContent = "$" + mytable.rows[i].cells[2].textContent;
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
/*     if (item.hasChildNodes) {item.removeChild};
    item.appendChild(mytable);
  } */
  return mytable;
}
