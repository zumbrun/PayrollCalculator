import {rates, salaries } from "./constants.js"
import { setupInputs } from "./inputs.js";
import { showOutputspage } from "./outputspage.js";
import { printPDF} from './prints.js';

export function setupOutputs(userinputs, datatables) {
  const userpay = {
    mtgs: 0,
    salary: 0,
    totalwage: 0,
    pera: 0,
    medicare: 0,
    net: 0,
    mileage: 0,
    phone: 0,
    internet: 0,
    misc: 0,
    totalpay: 0
  }
  const container = document.querySelector(".container");
  container.innerHTML = showOutputspage();
  
  const printbtn = document.getElementById("printbutton");
  printbtn.addEventListener("click", () => {
    printPDF(userinputs, datatables, userpay);
  });
  const cancelbtn = document.getElementById('cancelbutton');
  cancelbtn.addEventListener("click", () => {
    setupInputs(userinputs, datatables);
  });
  // update userpay
  calculate(userinputs, userpay);
  // assign outputs
  assignOutputs(userpay);
}
function calculate (userinputs, userpay) {
  // calculate outputs
  userpay.salary = getSalary(userinputs);
  userpay.mtgs = Number((( Number(userinputs.bmtgs) + Number(userinputs.omtgs)) * rates.meetings.rate).toFixed(2));
  userpay.totalwage = userpay.salary + userpay.mtgs;
  userpay.pera = Number(( -1 * userpay.totalwage * rates.pera.rate * userinputs.pera).toFixed(2));
  userpay.medicare = Number(( -1 * userpay.totalwage * rates.medicare.rate ).toFixed(2));
  userpay.net = Number(( userpay.totalwage + userpay.pera + userpay.medicare).toFixed(2));
  userpay.phone = Number(( userinputs.phone * rates.phone.rate).toFixed(2));
  userpay.internet = Number(( userinputs.internet * rates.internet.rate).toFixed(2));
  userpay.mileage = Number(( userinputs.miles * rates.mileage.rate).toFixed(2));
  userpay.misc = userinputs.misc;
  userpay.totalpay = userpay.net + userpay.mileage + userpay.phone + userpay.internet + userpay.misc;
  console.log(userinputs);
  console.log(userpay);
}
function assignOutputs (userpay) {
  const entries = Object.entries(userpay);
  for (const [key, value] of entries) {
    const myString = "op" + key
    const element = document.getElementById(`${myString}`);
      element.textContent = value.toFixed(2);
  }  
}
const getSalary = (userinputs) => {
  const str = userinputs.title.replace(/\s/g, "").toLowerCase();
  for (const [key, value] of Object.entries(salaries)) {
    console.log({key}, {value})
    if (str === key) {
      if (key === "supervisor") {
        console.log(value.rate)
       return userinputs.hours * value.rate;
      } 
      else {
        console.log(value.rate)
        return value.rate;
      }
    }
  }
}; 
