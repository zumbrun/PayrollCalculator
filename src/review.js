import { rates, salaries } from './constants.js';
import { showReviewpage } from './reviewpage.js';

export function setupReview (userinputs, datatables, userpay ) {
  const container = document.querySelector(".container");
  container.innerHTML = showReviewpage();
  // clear any previous created tables
  //removeAllTables();
  // complete sections for all userinputs
  assignUserinputs(userinputs, userpay);
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
  //printform.style.display = "block";

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
function assignUserinputs (userinputs, userpay) {
  let item = document.getElementById("supervisors");
  if (userinputs.title === "Supervisor") {item.style.display = "block";}
  else {item.style.display = "none"};
  const entries = Object.entries(userinputs);
  for (const [key, value] of entries) {
    const myString = "ip" + key
    const div = document.getElementById(`${myString}`);
    if (div) {
      //assign NONE is 0 else nothing
      if (Number(value) === 0) { div.textContent = "NONE" }
      else if (myString === "ipphone" || myString === "ipinternet") { div.textContent = "YES" }
      else {
        div.textContent = userinputs[key];
      }
    }
  };
  const div = document.getElementById('ipdate');
  div.textContent = Intl.DateTimeFormat('en').format(new Date());
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
