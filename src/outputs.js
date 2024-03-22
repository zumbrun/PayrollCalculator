import {rates, salaries, board} from "./constants.js"
import {showPrintpage} from './printpage.js';
import {printPDF} from './prints.js';

export function setupOutputs (userinputs) {
  
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
  Calculate(userpay);
}
//operator functions on most recent 2 numbers
function sum (a,b) { return(a + b)};
function subtract (a,b) {return(a - b)};
function multiply (a,b) {return( a * b) };
function divide (a,b) { b != 0 ? a / b : "Dividing by zero is not allowed."};
  
function Calculate (userpay, userinputs) {
  // calculate outputs
  userpay.salary = getSalary(userinputs);
  userpay.mtgs = Number(multiply(sum(userinputs.bmtgs, userinputs.omtgs),rates.meetings.rate).toFixed(2));
  userpay.totalwage = Number(sum(userpay.salary, userpay.mtgs).toFixed(2));
  userpay.pera = -1*Number(multiply(userpay.totalwage, rates.pera.rate*userinputs.pera).toFixed(2));
  userpay.medicare = -1*Number(multiply(userpay.totalwage, rates.medicare.rate).toFixed(2));
  userpay.net = Number(sum(userpay.totalwage, sum(userpay.pera, userpay.medicare)).toFixed(2));
  userpay.phone = Number(multiply(userinputs.phone, rates.phone.rate).toFixed(2));
  userpay.internet = Number(multiply(userinputs.internet, rates.internet.rate).toFixed(2));
  userpay.mileage = Number(multiply(userinputs.miles, rates.mileage.rate).toFixed(2));
  userpay.misc = userinputs.misc;
  userpay.totalpay = userpay.net + userpay.mileage + userpay.phone + userpay.internet + userpay.misc;
  // assign outputs
  assignOutputs("op");
}
function GetValue (myString) {
  const input = document.getElementById(`${myString}`);
  let amtString = input.value;
  if (amtString.charAt(0) === "$") {amtString = amtString.substring(1)};
  return Number(amtString);
}
function GetCheckedValue (myName) {
  const element = document.getElementsByName(`${myName}`);
  for (let i=0; i<element.length; i++){
    if (element[i].checked) {
      const val = Number(element[i].value);
      console.log(element, val);
      return val;
    }
  }
  //there are no checked values
  return false;
}
function assignOutputs (mytable) {
  const entries = Object.entries(userpay);
  for (const [key, value] of entries) {
    const myString = mytable + key
    const div = document.getElementById(`${myString}`);
    div.textContent = value.toFixed(2);
  }  
}
const getSalary = (userinputs) => {
  const str = userinputs.title.replace(/\s/g, "").toLowerCase();
  console.log({str});
  for (const [key, value] of Object.entries(salaries)) {
    console.log({key},{value});
    if (str === key) {
      console.log({key},{value});
      console.log(value.rate);
      if (key === "supervisor") {
        return Number(multiply(userinputs.hours, value.rate).toFixed(2));
    } 
      return Number((value.rate).toFixed(2));
    }
  }
}; 
