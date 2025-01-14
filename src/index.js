
import './style.css';
import { setupInputs } from './inputs.js';

if (process.env.NODE_ENV !== 'production') {
  //console.log("looks like we are in dev mode!");
};

const userinputs = {
    name: null,
    title: null,
    hours: 0,
    hoursmiles: 0,
    bmtgs: null,
    omtgs: 0,
    omtgsmiles: 0,
    mtgs: 0,
    pera: null,
    phone: null,
    internet: null,
    miles: 0,
    milesother: 0,
    misc:0,
    signature: null,
  }
  const datatables = {
    hours: [],
    miles: [],
    misc:  [],
    omtgs: [],
  }

setupInputs(userinputs, datatables);



