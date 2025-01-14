import { rates, salaries } from "./constants.js"

export function setupOutputs(userinputs) {
  const userpay = {
    mtgs: 0,
    salary: 0,
    totalwage: 0,
    pera: 0,
    medicare: 0,
    net: 0,
    miles: 0,
    phone: 0,
    internet: 0,
    misc: 0,
    totalpay: 0
  }
  // update userpay
  calculate(userinputs, userpay);
  // assign outputs
  assignOutputs(userpay);
  return userpay;
}
function calculate (userinputs, userpay) {
  // calculate outputs
  userpay.salary = getSalary(userinputs);
  userpay.mtgs = Number((userinputs.mtgs*rates.meetings.rate).toFixed(2));
  //userpay.mtgs = Number((( Number(userinputs.bmtgs) + Number(userinputs.omtgs)) * rates.meetings.rate).toFixed(2));
  userpay.totalwage = userpay.salary + userpay.mtgs;
  userpay.pera = Number(( -1 * userpay.totalwage * rates.pera.rate * userinputs.pera).toFixed(2));
  userpay.medicare = Number(( -1 * userpay.totalwage * rates.medicare.rate ).toFixed(2));
  userpay.net = Number(( userpay.totalwage + userpay.pera + userpay.medicare).toFixed(2));
  userpay.phone = Number(( userinputs.phone * rates.phone.rate).toFixed(2));
  userpay.internet = Number(( userinputs.internet * rates.internet.rate).toFixed(2));
  userpay.miles = Number(( userinputs.miles * rates.mileage.rate).toFixed(2));
  userpay.misc = Number(userinputs.misc);
  userpay.totalpay = userpay.net + userpay.miles + userpay.phone + userpay.internet + userpay.misc;
}
function assignOutputs (userpay) {
  const entries = Object.entries(userpay);
  for (const [key, value] of entries) {
    const myString = "op" + key
    const element = document.getElementById(`${myString}`);
    if (element) {
      element.textContent = Number(value).toFixed(2);
    }
  };  
}
const getSalary = (userinputs) => {
  const str = userinputs.title.replace(/\s/g, "").toLowerCase();
  if (str === "supervisor") {return userinputs.hours * salaries[str].rate;}
  else {return salaries[str].rate};
}; 
 