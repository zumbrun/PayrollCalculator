import { showFormspage } from "./formspage";
import { setupInputs } from "./inputs";

export function setupForm (type, userinputs, datatables) {
  const container = document.querySelector(".container");
  container.innerHTML = showFormspage();
  const inputform = document.getElementById('inputform');
  let inputtable = document.getElementById('inputtable');
  // initialize form
  inputtable = initializeForm(type, inputtable);
  let emptyRow = inputtable.tBodies[0].rows[0].cloneNode(true); 
  if (datatables[type].length !== 0) {
    inputtable = readStoredData(inputtable, emptyRow, datatables[type]);
  }
  // add event listeners to buttons
  let trashbtn = document.getElementById('trashbutton');
  const addbtn = document.getElementById('addbutton');
  const clearbtn = document.getElementById('cancelbutton');
  const savebtn = document.getElementById('submitbutton');
  // add event listerners to buttons
  trashbtn.addEventListener('click', (e) => {
    const cell = trashbtn.closest('td');
    if (cell) {
      let row = cell.parentElement;
      row.parentNode.removeChild(row);
    }
    e.preventDefault();
  });
  addbtn.addEventListener('click', (e) => {
    inputtable = addRowsToTable(inputtable, emptyRow, 1); 
    e.preventDefault();
  });
  clearbtn.addEventListener('click', (e) => {
    // no changes saved
    e.preventDefault();
    setupInputs(userinputs, datatables);
  });
  savebtn.addEventListener('click', (e) => {
    // check that all dates and descriptions are completed
    if(!inputform.checkValidity()) {
      return false;
    }
    e.preventDefault();
    //remove trash button column from table
    inputtable = deleteColumns(inputtable, [0]);
    //calculate the totals 
    const totals = calculateTotals(inputtable);
    // save totals to user inputs 
    userinputs = updateUserinputs(type, totals, userinputs);
    // save table to array
    datatables[type] = saveTableToArray(inputtable);
    // return to inputs
    setupInputs(userinputs, datatables);
  });
  inputtable.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const cell = document.activeElement.closest('td');
      if (cell) {
        const nextCell = cell.nextElementSibling;
        if (nextCell) {
          nextCell.focus();
        }
        else
          addbtn.focus();
      }
    }
  })
}
function initializeForm (type, table) {
  const mytitle = document.getElementById("title");
  let deleteCols = [];
  switch (type) {
    case "hours": 
      mytitle.textContent = "Enter information for hours and/or mileage";
      deleteCols = [6];
      break;
    case "miles": 
      mytitle.textContent = "Enter information for mileage reimbursement";
      deleteCols = [6,4,3];
      break;
    case "misc":
      mytitle.textContent = "Enter information for miscellaneous expenses";
      deleteCols = [5,4,3]; 
      break;
    case "omtgs":
      mytitle.textContent = "Enter information for other official meetings";
      deleteCols = [6,4,3]; 
      break;
    default:
      break;
  }
  table = deleteColumns(table, deleteCols);
  //table.tFoot.style.display = 'none';
  return table;
}
function calculateTotals(table) {
  //trash btn column is removed
  const tbody = table.tBodies[0];
  const rows = tbody.rows;
  let totals = [];
  if (rows.length > 0) {
    //calculate and store totals
    totals.push(0); //cell0
    totals.push(rows.length);//cell1
    for (let j = 2; j < rows[0].cells.length; j++) {
      let total = 0.0;
      for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].cells;
        const cell = cells[j];
        for(let k=0; k < cell.childNodes.length; k++) {
          const child = cell.childNodes[k];
          if (child.tagName === 'SELECT') {
            const selectElement = child;
            const selectedOption = selectElement.options[selectElement.selectedIndex];
            const selectedValue = selectedOption.value;
            total = total + Number(selectedValue);
          }
          else if (child.tagName === 'INPUT') {
            const inputElement = child;
            const inputValue = inputElement.value;
            total = total + Number(inputValue);
          }
        }
      }
      totals.push(total);
    }
  }
  return totals;
}
function readStoredData (table, emptyRow, array) {
  table = addRowsToTable (table, emptyRow, array.length-1)
  table = writeDataToTable(table, array);  
  return table;
}
function addRowsToTable (table, emptyRow, cnt) {
  for (let i=0; i < cnt; i++) {
    const newRow = emptyRow.cloneNode(true)
    table.tBodies[0].appendChild(newRow);
  }
  return table;
}
function deleteColumns (table, columnArray) {
  const rows =  Array.from(table.rows);
  rows.forEach(row => {
    const cells = Array.from(row.cells);
    columnArray.forEach(index => {
      cells[index].remove();
    })
  });
  return table;
}
function saveTableToArray (table) {
  //trash button removed from table
  const tbody = table.tBodies[0];
  const rows = tbody.rows;
  //calculate and store totals
  let array = [];
  for (let i = 0; i < rows.length; i++) {
    let rowArray = [];
    const cells = rows[i].cells;
    for (let j = 0; j < cells.length; j++) {
      const cell = cells[j];
      let value = "";
      for (let k=0; k < cell.childNodes.length; k++) {
        const child = cell.childNodes[k];
        if (child.tagName === 'SELECT') {
          // in date, hours, or minutes
          const selectedOption = child.options[child.selectedIndex];
          value = selectedOption.value;
        }
        else if (child.tagName === 'INPUT') {
          // in miles
          value = child.value;
        }
        else if (child.tagName === 'TEXTAREA') {
          //in description
          value = child.value;
        }
      } 
      rowArray.push(value);
    }
    array.push(rowArray);
  } 
  return array;
}
function writeDataToTable (table, array) {
  //note 1st column of table is the trash button and gets no data
  const tbody = table.tBodies[0];
  const rows = tbody.rows;
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].cells;
    for (let j = 1; j < cells.length; j++) {
      const cell = cells[j];
      for (let k=0; k < cell.childNodes.length; k++) {
        const child = cell.childNodes[k];
        if (child.tagName === 'SELECT') {
          //date, hours, minutes
          const selectedValue = array[i][j-1];
          for (let h=0; h < child.options.length; h++) {
            if(child.options[h].value === selectedValue) {
              child.selectedIndex = h;
            }
          }
        }
        else if (child.tagName === 'INPUT') {
          //miles or misc
          const inputElement = cell.firstChild;
          inputElement.value = array[i][j-1];
        }
        else if (child.tagName === 'TEXTAREA') {
          //description
          const textarea = cell.firstChild;
          textarea.value = array[i][j-1];
        }
      }
    }
  } 
  return table;
}
function updateUserinputs (type, totals, userinputs) {
  //trash button removed from table
  switch (type) {
    case "hours": 
      const hrs = totals[2] + totals[3];
      userinputs.hours = Number(hrs.toFixed(2));
      userinputs.hoursmiles = Number(totals[4].toFixed(1));
      break;
    case "miles": 
      userinputs.milesother = Number(totals[2].toFixed(1));
      break;
    case "misc": 
      userinputs.misc = Number(totals[2].toFixed(2));
      break;
    case "omtgs": 
      userinputs.omtgs =  totals[1];
      userinputs.omtgsmiles = Number(totals[2].toFixed(1));
      break;
  }
  userinputs.miles = userinputs.hoursmiles + userinputs.milesother + userinputs.omtgsmiles;
  userinputs.mtgs = userinputs.bmtgs + userinputs.omtgs;
  
  return userinputs;
}

  